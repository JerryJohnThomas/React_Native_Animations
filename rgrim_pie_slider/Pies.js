import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image,
    FlatList,
} from "react-native";
import React, { useEffect } from "react";
const { width, height } = Dimensions.get("window");

import MaskedView from "@react-native-masked-view/masked-view";
import { Svg } from "react-native-svg";
import Rect from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { transformOrigin } from "react-native-redash";

const PIE_HEIGHT = height / 3;
const ITEM_SIZE = width;

let Pie_Card = ({ scrollX, item, index }) => {
    useEffect(() => {
        console.log(item);
    }, []);

    const img_ctr_as = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollX.value,
                [
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                    (index + 1) * ITEM_SIZE,
                ],
                [0, 1, 0],
                Extrapolate.CLAMP
            ),
        };
    });

    const img_rotater = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${interpolate(
                        scrollX.value,
                        [
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE,
                            (index + 1) * ITEM_SIZE,
                        ],
                        [-120, -90, -75],
                        Extrapolate.CLAMP
                    )}deg`,
                },
            ],
        };
    });

    return (
        <Animated.View
            style={[
                styles.container1,
                img_ctr_as,
                { backgroundColor: item.bg_color },
            ]}
        >
            <Animated.Image
                source={item.picture}
                style={[styles.pie_img_style, img_rotater]}
                // style={[styles.pie_img_style]}
            />
        </Animated.View>
    );
};

const Pies = ({ scrollx, data }) => {
    return (
        <View
            style={{
                height: PIE_HEIGHT,
                bottom: 0,
                width,
                position: "absolute",
                backgroundColor: "grey",
            }}
            pointerEvents="none"
        >
            <FlatList
                data={data}
                keyExtractor={(item) => item.key + "-pies"}
                removeClippedSubviews={false}
                horizontal
                contentContainerStyle={styles.contentstyle1}
                renderItem={({ item, index }) => {
                    return (
                        <Pie_Card scrollX={scrollx} item={item} index={index} />
                    );
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    contentstyle1: {
        position: "relative",
        width: width,
        height: PIE_HEIGHT,
        backgroundColor: "blue",
    },
    container1: {
        // position: "relative",
        width: width,
        height: PIE_HEIGHT,
        position: "absolute",
        // height: PIE_HEIGHT,
        // height: height,
        // overflow: "hidden",
    },
    pie_img_style: {
        // height: PIE_HEIGHT * 1.55,
        // flex: 1,
        height: width,
        width: width,
        resizeMode: "contain",
        // transform: [{ rotateZ: "15deg" }],
        backgroundColor: "lime",
        // position: "absolute",
        // top: height - PIE_HEIGHT,
    },
});

export default Pies;
