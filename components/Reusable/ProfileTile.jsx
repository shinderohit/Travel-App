import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "./reusable.style";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";

const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <View style={reusable.rowWithSpace("flex-end")}>
          <AntDesign name="right" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  tile: {
    marginBottom: 10,
    backgroundColor: COLORS.lightWhite,
    padding: 15,
    borderRadius: 10,
  },
});
