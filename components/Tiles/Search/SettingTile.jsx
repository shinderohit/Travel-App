import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../Reusable/reusable.style";
import { COLORS, SIZES } from "../../../constants/theme";
import ReusableText from "../../Reusable/ReusableText";
import WidthSpacer from "../../Reusable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";

const SettingTile = ({ onPress, title, title1 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText
        text={title}
        family={"regular"}
        size={SIZES.large}
        color={COLORS.dark}
      />

      {title === "Language" ? (
        <View style={reusable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../assets/images/USA.png")}
            style={styles.image}
          />

          <WidthSpacer width={5} />

          <ReusableText
            text={"English"}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.gray}
          />

          <WidthSpacer width={5} />

          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      ) : (
        <View style={reusable.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"regular"}
            size={SIZES.large}
            color={COLORS.gray}
          />

          <WidthSpacer width={5} />

          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
  },
  image: { width: 40, height: 30, resizeMode: "contain" },
});
