import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TextTop from "./TextTop";
const { width, height } = Dimensions.get("window");
import MainPic from "./MainPic";
import { iceCreams } from "./data";
import CirclePic from "./CirclePic";
import { useState } from "react";
import AnimBox from "./AnimBox";
import AnimCircle from "./AnimCircle";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
    const [active, setActive] = useState(0);
    const [stack, setStack] = useState([]);
    const [lastcream, setLastcream] = useState(0);
    const [circlepos0, setCirclepos0] = useState({ x: 0, y: 0, h: 0, w: 0 });
    const [circlepos1, setCirclepos1] = useState({ x: 0, y: 0, h: 0, w: 0 });
    const [circlepos2, setCirclepos2] = useState({ x: 0, y: 0, h: 0, w: 0 });
    const [circlepos3, setCirclepos3] = useState({ x: 0, y: 0, h: 0, w: 0 });
    const [circlepos4, setCirclepos4] = useState({ x: 0, y: 0, h: 0, w: 0 });
    const [circlepos5, setCirclepos5] = useState({ x: 0, y: 0, h: 0, w: 0 });

    const[allDataLoaded, setAllDataLoaded] = useState(false);
    let arr = [false,false,false,false,false,false];
    
    useEffect(() => {
        setLastcream(iceCreams[0]);
        setStack([lastcream]);
    }, []);

    let pressHandler = (index) => {
        if (lastcream.key == index) return;
        setActive(() => index);
        setStack([lastcream, iceCreams[index]]);
        setLastcream(iceCreams[index]);
    };

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

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    let isChanging = false;

    let modifyCirclePos = (index, newData) => {
        arr[index]=true;
        switch(index)
        {
            case 0: setCirclepos0(newData);break;
            case 1: setCirclepos1(newData);break;
            case 2: setCirclepos2(newData);break;
            case 3: setCirclepos3(newData);break;
            case 4: setCirclepos4(newData);break;
            case 5: setCirclepos5(newData);break;
        }
        let isAllTrue = arr.every((element) => element === true);
        if(isAllTrue) setAllDataLoaded(true);
    };

        let getCirclePos = (index) => {
        switch(index)
        {
            case 0: return circlepos0;
            case 1: return circlepos1;
            case 2: return circlepos2;
            case 3: return circlepos3;
            case 4: return circlepos4;
            case 5: return circlepos5;
        }
    };

    let printCirclePos = () =>{
        console.log("==================");
        console.log(circlepos0);
        console.log(circlepos1);
        console.log(circlepos2);
        console.log(circlepos3);
        console.log(circlepos4);
        console.log(circlepos5);
        console.log("+++++++++");
    }

    return (

        <View style={styles.container}>
            {stack.map((item, index) => {
                return (
                    <MainPic
                        bgColor={item.backgroundColor}
                        picture={item.doublePicture}
                        key={`main_pic${item.key}`}
                        index={index}
                        count={item.key}
                        getCirclePos={getCirclePos}
                        allDataLoaded={allDataLoaded}
                    />
                );
            })}

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
                            pressHandler={pressHandler}
                            key={`circles_pic${item.key}_${index}`}
                            modifyCirclePos={modifyCirclePos}
                        />
                    );
                })}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: "green",
        width,
        // marginTop: 30,
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
