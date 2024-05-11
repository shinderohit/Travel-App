import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";

const SelectedRoom = () => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={"Selected Room"}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={10} />./gradlew clean./gradlew clean

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
          </View>
          <HeightSpacer height={10} />
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
