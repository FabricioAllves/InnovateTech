import React from "react";
import { FlatList, Text, StyleSheet, View, SafeAreaView, ActivityIndicator, TouchableOpacity, TextInput, Modal, StatusBar } from "react-native";
import { CardUser } from "@components/CardStudant";
import { theme } from "../../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ModalDetails from "@components/ModalDetails";
import ModalFilter from "@components/ModalFilter";
import useSearchStudant from "./home.model";

export function Home() {

  const {
    value,
    setValue,
    filteredData,
    modalVisibleFilter,
    modalVisible,
    setModalVisible,
    setModalVisibleFilter,
    loadingMore,
    MoreDetailsStudant,
    handleFetchMore
  } = useSearchStudant();

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

          <TouchableOpacity style={styles.button} onPress={() => setModalVisibleFilter(true)}>
            <MaterialCommunityIcons
              name='tune'
              size={30}
              style={styles.icon} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.login?.uuid+item.registered.date}
          renderItem={({ item }) => <CardUser data={item} onPress={() => MoreDetailsStudant(item)} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.4}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator style={{marginVertical: 20}}color={theme.colors.BLUE_100} />
              : <></>
          }
        />

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalDetails setVisible={() => setModalVisible(false)} />
        </Modal>
        <Modal visible={modalVisibleFilter} animationType='fade' transparent={true}>
          <ModalFilter setVisible={() => setModalVisibleFilter(false)} />
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
  },
  listEmpyText: {
    fontFamily: theme.fonts.regular,
    fontSize: 20
  }
});