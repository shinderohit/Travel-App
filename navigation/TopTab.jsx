import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBooking, TopInfo, TopTrip } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles5 from "./topTab.style";

// https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca289a6f-vinci_06.jpg

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://d326fntlu7tb1e.cloudfront.net/uploads/45e7d539-23c4-4b9a-91c8-1b0dec6e2ae9-vinci_04_china.jpg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress1={() => {}}
          />

          <View style={styles5.profile}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
              }}
              style={styles5.image}
            />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"Rohini Shinde"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.white}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={styles5.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"rohini@gmail.com"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBooking} />
        <Tab.Screen name="Trips" component={TopTrip} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
