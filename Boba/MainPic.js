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
    withTiming,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const MainPic = ({ bgColor, picture }) => {

    
    const [ready, setReady] = useState(0);
    let progress = useSharedValue(0.1);
    
        

    const r = width / 2;
    useEffect(()=>{
        progress.value = withTiming(ready, {
            duration: 1000,
            // easing: Easing.inOut(Easing.quad),
        });
    },[])

    useEffect(() => {
        // console.log(progress);
        console.log("progress: ", progress.value, "  ready: ", ready);
    }, [progress, ready]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(
                        progress.value,
                        [0, 1],
                        [0, 10],
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    });

    return (
        <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
                <Animated.View
                    style={[
                        animatedStyles,
                        {
                            width: r * 2,
                            height: r * 2,
                            borderRadius: r,
                            backgroundColor: "peachpuff",
                        },
                    ]}
                ></Animated.View>
            }
        >
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                <View style={styles.image_container}>
                    <Image
                        source={picture}
                        style={styles.picturestyle}
                        onLoadEnd={() => setReady(1)}
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
});
export default MainPic;
