import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import styles3 from "./hotelDetails.style";
import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReviewList,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import { Feather } from "@expo/vector-icons";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Hotel Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    __v: 1,
    reviews: [
      {
        _id: "64d38ff59af911acfab0ece",
        review: "lorem ipsum dolor sit amet, consectetur adip",
        rating: "4.6",
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          username: "Rohit Shinde",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-12-09",
      },
      {
        _id: "64d797efa5628cedef4fce58",
        review: "lorem ipsum dolor sit amet, consectetur adip",
        rating: "4.6",
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          username: "Anand Shinde",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-12-09",
      },
    ],
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View>
        <View style={styles3.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles3.titleContainer}>
            <View style={styles3.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={5} />

              <ReusableText
                text={hotel.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.large}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles3.container, { paddingTop: 70 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Review"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={15} />

          <ReviewList reviews={hotel.reviews} />
        </View>

        <View style={[reusable.rowWithSpace("space-between"), styles3.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              family={"regular"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <HeightSpacer height={10} />

            <ReusableText
              text={"Jan 01 - Dec 25"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>
          <ReusableBtn
            onPress={() => navigation.navigate("SelectRoom")}
            btnText={"Select Room"}
            width={150}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
        <HeightSpacer height={50} />
      </View>
    </ScrollView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({});
