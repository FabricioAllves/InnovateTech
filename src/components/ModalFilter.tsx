import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStudantStore } from 'src/store/studant.store';

type Props = {
  setVisible: () => void;
}

export default function ModalFilter({ setVisible }: Props) {

  const { setGender } = useStudantStore()

  const handleChangeGender = (gender: string) => {
    setGender(gender)
    setVisible()
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.modalBackground}></View>
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <Text style={styles.titleModal}>
          Filter by Gender
        </Text>
        <View style={styles.wrapperOptions}>
          <TouchableOpacity
            onPress={() => handleChangeGender('female')}
            activeOpacity={0.6}
            style={[styles.optionSelect, { backgroundColor: '#ec4899' }]}>
            <MaterialCommunityIcons
              name='gender-female'
              size={40}
              style={styles.icon}
            />
            <Text style={styles.titleSelect}>
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleChangeGender('male')}
            activeOpacity={0.6}
            style={[styles.optionSelect, { backgroundColor: theme.colors.BLUE_100 }]}
          >
            <MaterialCommunityIcons
              name='gender-male'
              size={40}
              style={styles.icon}
            />
            <Text style={styles.titleSelect}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeGender('all')}
            activeOpacity={0.6}
            style={[styles.optionSelect, { backgroundColor: theme.colors.BLACK_200 }]}
          >
            <MaterialCommunityIcons
              name='gender-male-female'
              size={40}
              style={styles.icon}
            />
            <Text style={styles.titleSelect}>
              All
            </Text>
          </TouchableOpacity>
        </View>
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
    flex: 2,
  },
  modalContent: {
    flex: 1,
    backgroundColor: theme.colors.WHITE,
    padding: 24,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,

  },
  wrapperOptions: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  optionSelect: {
    width: '32%',
    height: 150,
    borderWidth: 1,
    borderColor: theme.colors.GRAY_300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleModal: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    marginBottom: 15
  },
  icon: {
    color: theme.colors.WHITE
  },
  titleSelect: {
    fontSize: 22,
    fontFamily: theme.fonts.regular,
    color: theme.colors.WHITE
  }

});