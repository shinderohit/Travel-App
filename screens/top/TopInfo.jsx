import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProfileTile } from "../../components";

const TopInfo = ({ navigation }) => {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile
        title={"Personal Information"}
        icon={"user"}
        onPress={() => {}}
      />
      <ProfileTile
        title={"Settings"}
        icon={"setting"}
        onPress={() => navigation.navigate("Setting")}
      />
      <ProfileTile
        title={"Payment "}
        icon={"creditcard"}
        onPress={() => navigation.navigate("Payments")}
      />
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({});
