import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import {
  AppBar,
  HeightSpacer,
  ReusableText,
  SettingTile,
} from "../../components";

const Setting = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
        <View style={{ height: 100 }}>
          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <ReusableText
            text={"Account Settings"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <SettingTile title={"Language"} />

          <HeightSpacer height={3} />

          <SettingTile title={"Country"} title1={"USA"} />

          <HeightSpacer height={3} />

          <SettingTile title={"Currency"} title1={"USD"} />

          <HeightSpacer height={30} />

          <ReusableText
            text={"Support"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <SettingTile title={"Get Help"} title1={""} />

          <HeightSpacer height={3} />

          <SettingTile title={"Give a feedback"} title1={""} />

          <HeightSpacer height={30} />

          <ReusableText
            text={"Legal"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <SettingTile title={"Term of Services"} title1={""} />

          <HeightSpacer height={3} />

          <SettingTile title={"Privacy Policy"} title1={""} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
