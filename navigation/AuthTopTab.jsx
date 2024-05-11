import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";

const AuthTopTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={40} />

        <AssetImage
          data={require("../assets/images/bg2.png")}
          width={"100%"}
          height={250}
          mode={"contain"}
        />
        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({});
