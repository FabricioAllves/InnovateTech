import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { UserPhoto } from './UserPhoto';
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  setVisible: () => void;
}

export default function ModalDetails({ setVisible }: Props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.modalBackground}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <View style={styles.contentContainer}>
          <UserPhoto size={150} url={'https://github.com/FabricioAllves.png'} />

        </View>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={setVisible}
        >
          <MaterialCommunityIcons
            name='close'
            size={22}
            style={styles.icon}
          />
        </TouchableOpacity>

        <ScrollView style={{marginTop: 60, flex: 1}}>
          <Text style={styles.name}>Fabricio Henrique</Text>

          <View style={styles.about}>
            <Text style={styles.textBold}>E-mail</Text>
            <Text style={styles.textRegular}>fabricio@example.com</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Gender</Text>
            <Text style={styles.textRegular}>Masculino</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Date of birth</Text>
            <Text style={styles.textRegular}>01/01/2000</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Fone</Text>
            <Text style={styles.textRegular}>+55 11 99999-9999</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Nationality</Text>
            <Text style={styles.textRegular}>Brasileiro</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Address</Text>
            <Text style={styles.textRegular}>Rua Exemplo, 123</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>ID</Text>
            <Text style={styles.textRegular}>1234567890</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(34,34,34, 0.7)',
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    flex: 3,
    backgroundColor: theme.colors.BLUE_100,
    padding: 24,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    top: -75,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 80,
  },
  name: {
    color: theme.colors.WHITE,
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center'
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  textBold: {
    color: theme.colors.WHITE,
    fontFamily: theme.fonts.bold,
    fontSize: 18,
  },
  textRegular: {
    color: theme.colors.WHITE,
    fontFamily: theme.fonts.regular,
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'rgba(34,34,34, 0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: theme.colors.WHITE
  }
});