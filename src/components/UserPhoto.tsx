import { StyleSheet, Image } from "react-native";
import { theme } from "../../theme";

type Props = {
  size: 70 | 150
  url: string
}

export function UserPhoto({ size, url }: Props) {
  return (
    <Image
      style={[styles.container, { width: size, height: size, borderRadius: size }]}
      src={url}
    >
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.GRAY_300,
    borderColor: theme.colors.GRAY_300,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: theme.colors.GRAY_400
  }
})