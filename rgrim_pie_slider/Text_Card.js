import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from 'react'
const { width, height } = Dimensions.get("window");

const Text_Card = ({ item, index , scrollx}) => {
  return (
      <View style={styles.tc_container}>
          <Text style={styles.text_style}> {item.title}</Text>

          <Text style={[styles.about_style, { color: item.about_color }]}>
              {" "}
              {item.about}
          </Text>
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
        transform: [{ translateY: -30 }],
        fontSize: 44,
        color: "white",
        fontFamily: "playfair-bold",
    },
    about_style: {
        transform: [{translateY:30}],
        paddingHorizontal: 20,
        fontFamily: "playfair-bold",
        fontSize: 17,
        color: "black",
        textAlign: "center",
    },
});


export default Text_Card