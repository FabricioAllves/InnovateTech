import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, View, SafeAreaView, ActivityIndicator, RefreshControl, TouchableOpacity, TextInput, Modal, StatusBar } from "react-native";
import { CardUser } from "@components/CardUser";
import { ApiResponse, User } from "src/types/user"
import { Api } from "src/services/api";
import { theme } from "../../theme";
import { SEED, MAX_RESULTS } from "consts";
import { getLocalStorageListOnePage, setLocalStorageListOnePage } from "src/utils/Storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ModalDetails from "@components/ModalDetails";

export function Home() {
  const [filteredStudants, setFilteredStudants] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false)

  const filteredData = filteredStudants.filter(item =>
    item.name.title.toLowerCase().includes(value.toLowerCase()) ||
    item.name.first.toLowerCase().includes(value.toLowerCase()) ||
    item.name.last.toLowerCase().includes(value.toLowerCase())
  );

  const fetchStudents = async () => {
    try {
      let data;
      const url = `/?seed=${SEED}&results=${MAX_RESULTS}&page=${page}&nat=BR`

      if (page === 1) {
        const localData = await getLocalStorageListOnePage();
        if (localData) { // save LocalStoage
          data = { results: localData };

        } else { // Primeira renderizacao, fazer requisicao pagina 1
          const response = await Api.get<ApiResponse>(url);
          data = response.data;
          await setLocalStorageListOnePage(data.results);
        }
      } else { // Pagina > 1 fazer requisicao proxima pagina
        const response = await Api.get<ApiResponse>(url);
        data = response.data;
      }

      if (!data) return setLoading(true);

      if (page > 1) {
        setFilteredStudants((oldValue) => [...oldValue, ...data.results]);
      } else {
        setFilteredStudants(data.results);
      }

      setLoading(false);
    } catch (error) {
      console.log('Error occurred in the call fetchStudents: ', error);
    }
  };

  async function handleFetchMore(distance: number) {
    if (distance < 1) return;
    setLoading(true);
    setPage((oldValue) => oldValue + 1);
  }

  useEffect(() => {
    fetchStudents();
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.body}>
        <Text style={styles.title}>InnovateTech</Text>

        <View style={styles.wrapperInput}>
          <MaterialCommunityIcons
            name='magnify'
            size={30}
            style={[styles.icon, { color: theme.colors.BLUE_100, paddingLeft: 10 }]} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name='tune'
              size={30}
              style={styles.icon} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.login?.uuid}
          renderItem={({ item }) => <CardUser data={item} onPress={() => setModalVisible(true)} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.3}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => handleFetchMore} 
            />
          }
          ListFooterComponent={
            loading
              ? <ActivityIndicator size={60} color={theme.colors.BLUE_100} />
              : <></>
          }
        />

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalDetails setVisible={() => setModalVisible(false)} />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.WHITE,
  },
  body: {
    flex: 1,
    backgroundColor: theme.colors.WHITE,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.GRAY_400,
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
  wrapperInput: {
    width: '100%',
    height: 60,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: theme.colors.GRAY_300,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    height: 45,
    fontSize: 16,
  },
  button: {
    width: 59,
    height: 59,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.BLUE_100,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  icon: {
    fontSize: 23,
    color: theme.colors.WHITE
  }
});