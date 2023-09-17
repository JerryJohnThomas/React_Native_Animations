import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
    Easing,
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import AnimBox from "./AnimBox";
import AnimCircle from "./AnimCircle";
const { width, height } = Dimensions.get("window");

const MainPic = ({
    bgColor,
    picture,
    index,
    count,
    allDataLoaded,
    getCirclePos,
}) => {
    let offset = useSharedValue(0);
    let [displacement, setDisplacement] = useState({ x: 0, y: 0, h: 0, w: 0 });

    useEffect(() => {
        let res = getCirclePos(count);
        console.log("received for ", count, "as ", res);
        setDisplacement(res);
    }, [allDataLoaded]);

    useEffect(() => {
            offset.value = withTiming(4, { duration: 1500 });
    }, []);

    const r = width / 2;

    let resetOffset  = () =>{
        offset.value = 0;
    }

    const animatedStyles3 = useAnimatedStyle(() => ({
        transform: [{ scale: offset.value }],
    }));

    return (
        <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
                <Animated.View
                    style={[
                        {
                            width: r * 2,
                            height: r * 2,
                            borderRadius: r,
                            backgroundColor: "peachpuff",
                            // marginLeft: displacement.x,
                            // marginTop: displacement.y,
                            // marginLeft:(width/6)*(count-2.5)+(width/18)*Math.sign(count-3),
                        },
                        displacement && displacement.x
                            ? {
                                  marginLeft:
                                      displacement.x - r + displacement.w / 2,
                              }
                            : null,
                        displacement && displacement.y
                            ? {
                                  marginTop:
                                      displacement.y - r + displacement.h / 2,
                              }
                            : null,
                        animatedStyles3,
                    ]}
                ></Animated.View>
            }
        >
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                <View style={styles.image_container}>
                    <Animated.Image
                        source={picture}
                        style={styles.picturestyle}
                    />
                </View>
            </View>
        </MaskedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        position: "absolute",
        height,
    },
    image_container: {
        marginTop: 0.3 * height,
        width,
        height: 0.4 * height,
    },
    picturestyle: {
        width: width,
        height: 0.4 * height,
        objectFit: "cover",
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: "#b58df1",
        borderRadius: 10,
    },
    containerCircle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
});
export default MainPic;
