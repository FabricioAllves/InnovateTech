import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from 'src/types/user';

export const getLocalStorageListOnePage = async (): Promise<
User[]
> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@listStudants');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const setLocalStorageListOnePage = async (
  listStudantss: User[],
) => {
  try {
    const jsonValue = JSON.stringify(listStudantss);
    await AsyncStorage.setItem('@listStudants', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const removeLocalStorageListOnePage = async () => {
  try {
    await AsyncStorage.removeItem('@listStudants');
  } catch (e) {
    console.log(e);
  }
};
