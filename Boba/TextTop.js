import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from 'react'
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("window");


const TextTop = () => {
        let [fontsLoaded] = useFonts({
            foundergreek_medium: require("../fonts/Founders_Grotesk/FoundersGrotesk-Medium.otf"),
            foundergreek_light: require("../fonts/Founders_Grotesk/FoundersGrotesk-Light.otf"),
            foundergreek_bold: require("../fonts/Founders_Grotesk/FoundersGrotesk-Bold.otf"),
            foundergreek_semibold: require("../fonts/Founders_Grotesk/FoundersGrotesk-Semibold.otf"),
            medium_regular: require("../fonts/Playfair/PlayfairDisplay-Medium.ttf"),
        });

        if (!fontsLoaded) {
            return <AppLoading />;
        }

  return (
      <View>
          <View style={styles.textset1}>
              <Text style={styles.textstyle1}>BOBA X ICE CREAM</Text>
              <Text style={styles.textstyle1}>OUR STORY</Text>
          </View>

          <View style={styles.textset2}>
              <Text style={styles.textstyle2}>BOBA X </Text>
              <Text style={styles.textstyle2}>ICE CREAM</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "peachpuff",
        width,
        height,
    },
    textset1: {
        display: "flex",
        flexDirection: "row",
        width,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 0,
    },
    textstyle1: {
        fontFamily: "foundergreek_bold",
        color: "white",
        fontSize: 15,
        transform: [{ scaleY: 1.5 }, { scaleX: 0.8 }],
    },
    textset2: {
        marginTop: 0.05*height,
        width,
        height: 0.25 * height,
        justifyContent: "space-around",
        alignItems: "center",
    },
    textstyle2: {
        fontFamily: "foundergreek_bold",
        fontFamily: "barlow_bold",
        color: "white",
        fontSize: 75,
        transform: [{ scaleY: 1.5},{scaleX:1.2 }],
    },
});

export default TextTop