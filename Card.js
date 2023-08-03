import React from 'react'
import { Image, StyleSheet, Dimensions, Alert, View, Text } from "react-native";
const { width, height } = Dimensions.get("window");
export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Card = ({item: {title, subtitle, picture}}) => {
  return (
      <View style={[styles.container]}>
          <Image source={picture} style={[styles.picture]} />
          <View style={styles.titleContainer}>
              <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
              <View style={styles.mainTitle}>
                  <View>
                      <Text style={styles.title}>{title.toUpperCase()}</Text>
                  </View>
              </View>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
        width,
        height: MAX_HEIGHT,
        justifyContent: "flex-end",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "500",
    },
    titleContainer: {
        maxHeight: MAX_HEIGHT * 0.61,
        justifyContent: "center",
        flex: 1,
    },
    mainTitle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        padding: 32,
        transform: [{ translateY: 64 }],
    },
    subtitle: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Card