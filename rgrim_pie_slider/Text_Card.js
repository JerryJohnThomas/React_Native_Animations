import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from 'react'
const { width, height } = Dimensions.get("window");

const Text_Card = ({ item, index , scrollx}) => {
  return (
      <View style={styles.tc_container}>
          <Text style={styles.text_style}> {item.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    tc_container: {
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
        // backgroundColor: "green",
    },
    text_style: {
        transform: [{ translateY: -50 }],
        fontSize: 44,
        color: "white",
        fontFamily: "playfair-medium",
        backgroundColor: "green",
    },
});


export default Text_Card