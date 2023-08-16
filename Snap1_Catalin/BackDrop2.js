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

let LocalCard = ({scrollX, item, index }) => {
    // const animatedStyles2 = useAnimatedStyle(() => {
    //     return {
    //         width: interpolate(
    //             scrollX.value,
    //             [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
    //             [0, width],
    //             Extrapolate.CLAMP
    //         ),
    //     };
    // });

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
            // style={[styles.container1]}
        >
            <Image
                source={item.picture}
                style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: "absolute",
                }}
            />
        </Animated.View>
    );
};

export default Backdrop2 = ({ Movies, scrollX }) => {
    let tx = useSharedValue(0);
    const animatedStyles1 = useAnimatedStyle((index) => {
        return {
            width: tx.value,
        };
    });

    let scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            console.log(tx.value);
            console.log("tx.value");
        },
    });

    return (
        <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
            <FlatList
                data={Movies}
                keyExtractor={(item) => item.key + "-backdrop"}
                removeClippedSubviews={false}
                onScroll={scrollHandler}
                contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
                renderItem={({ item, index }) => {
                    return (
                        <LocalCard
                            scrollX={scrollX}
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
        width,
        height,
        overflow: "hidden",
    },
});
