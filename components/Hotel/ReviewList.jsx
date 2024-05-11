import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewTile from "../Tiles/Reviews/ReviewTile";

const ReviewList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTile review={item} />
        </View>
      )}
    />
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
