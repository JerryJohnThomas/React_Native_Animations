import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TextTop from "./TextTop";
const { width, height } = Dimensions.get("window");
import MainPic from "./MainPic";
import { iceCreams } from "./data";
import CirclePic from "./CirclePic";
import { useState } from "react";

const Home = () => {
    const [active, setActive] = useState(0);

    let [fontsLoaded] = useFonts({
        foundergreek_medium: require("../fonts/Founders_Grotesk/FoundersGrotesk-Medium.otf"),
        foundergreek_light: require("../fonts/Founders_Grotesk/FoundersGrotesk-Light.otf"),
        foundergreek_bold: require("../fonts/Founders_Grotesk/FoundersGrotesk-Bold.otf"),
        foundergreek_semibold: require("../fonts/Founders_Grotesk/FoundersGrotesk-Semibold.otf"),
        medium_regular: require("../fonts/Playfair/PlayfairDisplay-Medium.ttf"),
        barlow_medium: require("../fonts/Barlow/BarlowCondensed-Medium.ttf"),
        barlow_light: require("../fonts/Barlow/BarlowCondensed-Light.ttf"),
        barlow_bold: require("../fonts/Barlow/BarlowCondensed-Bold.ttf"),
        philosopher_medium: require("../fonts/Philosopher/Philosopher-Regular.ttf"),
        philosopher_bold: require("../fonts/Philosopher/Philosopher-Bold.ttf"),
    });

    useEffect(() => {
    }, []);


    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.container}>
            {/* {iceCreams.map((item, index) => {
                return (
                    <MainPic
                        bgColor={item.backgroundColor}
                        picture={item.doublePicture}
                        key={`main_pic${item.key}`}
                    />
                );
            })} */}
            <MainPic
                bgColor={iceCreams[active].backgroundColor}
                picture={iceCreams[active].doublePicture}
                key={`main_pic${iceCreams[active].key}`}
            />

            <TextTop />

            <View style={styles.circleContainer}>
                {iceCreams.map((item, index) => {
                    return (
                        <CirclePic
                            bgColor={item.backgroundColor}
                            picture={item.singlePicture}
                            index={index}
                            active={active}
                            setActive={setActive}
                            key={`circles_pic${item.key}`}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9DB00",
        width,
        paddingTop: 20,
        height,
    },
    circleContainer: {
        width,
        paddingTop: height * 0.3,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});

export default Home;
