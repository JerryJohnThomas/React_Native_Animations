import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chanel from "./Chanel";
import Chanel2 from "./Chanel2";
import Anim1 from "./Anim1";
import Catalogue from "./Snap1_Catalin/Catalogue";
import Pie_container from "./rgrim_pie_slider/Pie_container";
import Pie_container2 from "./rgrim_pie_slider/Pie_container2";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Three_Starter101 from "./Three/Starter101/Three_Starter101";

// SplashScreen.preventAutoHideAsync();

export default function App() {
    let [isfontsloaded] = useFonts({
        "playfair-medium": require("./fonts/Playfair/PlayfairDisplay-Medium.ttf"),
        "playfair-bold": require("./fonts/Playfair/PlayfairDisplay-Bold.ttf"),
        "playfair-regular": require("./fonts/Playfair/PlayfairDisplay-Regular.ttf"),
    });

    return (
        <>
            {/* <Anim1 /> */}
            <StatusBar hidden style="auto" />
            <Pie_container2 />
            {/* <Three_Starter101 /> */}
            {/* <Pie_container /> */}
            {/* <Chanel2 /> */}
            {/* <Catalogue /> */}
            {/* <Chanel /> */}
        </>
        // <View style={styles.container}>
        //  <Text>Open up App.js to start working on your app!</Text>
        // <Text>Open up App.js to start working on your app!</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
