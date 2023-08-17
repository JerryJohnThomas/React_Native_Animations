import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Dimensions,
    Image,
} from "react-native";
import React from "react";
import { pie_data } from "./pie_data";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const Pie_container = () => {
    let scrollx = useSharedValue(0);

    let scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollx.value = event.contentOffset.x;
        },
    });

    return (
        <View>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={pie_data}
                keyExtractor={(item) => item.key}
                horizontal
                snapToInterval={width}
                onScroll={scrollHandler}
                bounces={false}
                contentContainerStyle={{
                    alignItems: "flex-end",
                }}
                renderItem={({ item, index }) => {
                    return (
                        <BackDrop_Card
                            item={item}
                            index={index}
                            scrollx={scrollx}
                        />
                    );
                }}
            ></Animated.FlatList>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={pie_data}
                keyExtractor={(item) => item.key}
                horizontal
                bounces={false}
                renderItem={({ item, index }) => {
                    return (
                        <View>

                        <Pie_Image
                            item={item}
                            index={index}
                            scrollx={scrollx}
                            />
                            <Text>!!m</Text>
                            </View>
                    );
                }}
            ></Animated.FlatList>
        </View>
    );
};

let Pie_Image = ({ item, index, scrollx }) => {
    let inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const img_anim_style1 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${interpolate(
                        scrollx.value,
                        inputRange,
                        [-45, 0, 45],
                        Extrapolate.CLAMP
                    )}deg`,
                },
            ],
        };
    });

    return (
        <Animated.View style={styles.img_container}>
            <Text>ok</Text>
            <Animated.Image
                source={item.picture}
                style={[styles.image_style, img_anim_style1]}
            />
        </Animated.View>
    );
};

let BackDrop_Card = ({ item, index, scrollx }) => {
    let inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const animated_bg = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollx.value,
                inputRange,
                [0, 1, 0],
                Extrapolate.CLAMP
            ),
        };
    });
    const img_anim_style1 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: `${interpolate(
                        scrollx.value,
                        inputRange,
                        [-45, 0, 45],
                        Extrapolate.CLAMP
                    )}deg`,
                },
            ],
        };
    });

    return (
        <Animated.View
            style={[
                styles.bdcard_style,
                { backgroundColor: item.bg_color },
                animated_bg,
            ]}
        >
            <Text>{item.title}</Text>
            <LinearGradient
                colors={["transparent", "white"]}
                style={styles.lg}
            ></LinearGradient>
            {/* <Animated.View style={styles.img_container}>
                <Animated.Image
                    source={item.picture}
                    style={[styles.image_style, img_anim_style1]}
                />
            </Animated.View> */}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    bdcard_style: {
        width: width,
        height: height,
        backgroundColor: "peachpuff",
    },
    image_style: {
        width: width,
        transform: [{ translateX: -100 }],
        height: 350,
        resizeMode: "contain",
    },
    img_container: {
        position: "absolute",
        bottom: 0,
        // backgroundColor: "green",
    },
    lg: {
        height: height / 2,
        width: width,
        position: "absolute",
        bottom: 0,
    },
    container1: {
        position: "absolute",
        width,
        height,
        overflow: "hidden",
        backgroundColor:"green",
    }
});

export default Pie_container;
