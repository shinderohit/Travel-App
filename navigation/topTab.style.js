import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const styles5 = StyleSheet.create({
  profile: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 110,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    borderRadius: 90,
  },
  name: {
    backgroundColor: COLORS.lightGrey,
    padding: 10,
    borderRadius: 12,
  },
});

export default styles5;
