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
import { useStudantStore } from 'src/store/studant.store';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  setVisible: () => void;
}

export default function ModalDetails({ setVisible }: Props) {
  const {studant} = useStudantStore()
  const name = studant?.name?.first + " " + studant?.name?.last;
  const formatDatebirth = formatDate(studant?.dob?.date ?? '');
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.modalBackground}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <View style={styles.contentContainer}>
          <UserPhoto size={150} url={studant?.picture.large ?? ''} />
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
          <Text style={styles.name}>{name}</Text>

          <View style={styles.about}>
            <Text style={styles.textBold}>E-mail</Text>
            <Text style={styles.textRegular}>{studant?.email.slice(0, 26)}...</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Gender</Text>
            <Text style={styles.textRegular}>{studant?.gender}</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Date of birth</Text>
            <Text style={styles.textRegular}>{formatDatebirth}</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Phone</Text>
            <Text style={styles.textRegular}>{studant?.phone}</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Nationality</Text>
            <Text style={styles.textRegular}>{studant?.nat}</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>Address</Text>
          <Text style={styles.textRegular}>{studant?.location.city}</Text>
          </View>
          <View style={styles.about}>
            <Text style={styles.textBold}>ID</Text>
            <Text style={styles.textRegular}>{studant?.id.value}</Text>
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