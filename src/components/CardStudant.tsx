import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { UserPhoto } from "@components/UserPhoto";
import { User } from "src/types/user";
import { theme } from "../../theme";
import { formatDate } from "@utils/formatDate";


type PropsParamsStudant = TouchableOpacityProps & {
  data: User;
}

export function CardUser({ data, ...rest }: PropsParamsStudant) {
  const nameStudant = data.name?.first + " " + data.name?.last;
  const formatDatebirth = formatDate(data?.dob?.date);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <UserPhoto size={70} url={data.picture.large}/>

      <View style={styles.userInfo}>
        <Text style={styles.name}>
          {nameStudant}
        </Text>
        <View style={styles.aboutUser}>
          <Text style={styles.gender}>{data.gender}</Text>
          <Text style={styles.datebirth}>{formatDatebirth}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: theme.colors.GRAY_300,
    marginBottom: 10,
    padding: 10,
    gap: 10,
  },
  userInfo: {
    flex: 1,
    height: 110,
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  aboutUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datebirth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.colors.BLUE_100
  }
})