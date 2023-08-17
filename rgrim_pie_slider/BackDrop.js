import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image,
    FlatList,
} from "react-native";
import React from "react";
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

const BACKDROP_HEIGHT = height;
const ITEM_SIZE = width;


let LocalCard = ({ scrollX, item, index }) => {
    const animatedStyles2 = useAnimatedStyle(() => {
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
    return (
        <Animated.View
            removeClippedSubviews={false}
            style={[styles.container1, animatedStyles2]}
        >
            <View
                source={item.picture}
                style={{
                    backgroundColor: item.bg_color,
                    width,
                    height: BACKDROP_HEIGHT,
                    position: "absolute",
                }}
            />
        </Animated.View>
    );
};


const BackDrop = ({ scrollx, data }) => {
    return (
        <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.key + "-backdrop"}
                removeClippedSubviews={false}
                horizontal
                contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
                renderItem={({ item, index }) => {
                    return (
                        <LocalCard
                            scrollX={scrollx}
                            item={item}
                            index={index}
                        />
                    );
                }}
            />
            <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "white"]}
                style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: "absolute",
                    bottom: 0,
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container1: {
        position: "absolute",
        width:width,
        height:height,
        overflow: "hidden",
    },
});



export default BackDrop;
