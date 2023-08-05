import React from "react";
import { Image, StyleSheet, Dimensions, Alert, View, Text } from "react-native";
const { width, height } = Dimensions.get("window");
// export const MIN_HEIGHT = 128;
export const MIN_HEIGHT = height /8 ;
export const MAX_HEIGHT = height / 2;
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Easing, Extrapolate, interpolate, withTiming } from "react-native-reanimated";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedScrollHandler,
} from "react-native-reanimated";

const Card2 = ({ y, index, item: { title, subtitle, picture } }) => {
    let container = useAnimatedStyle(() => ({
        height: interpolate(
            y.value,
            [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
            [MIN_HEIGHT, MAX_HEIGHT],
            Extrapolate.CLAMP
        ),
    }));

    let container2 = useAnimatedStyle(() => ({
        height: withTiming(
            interpolate(
                y.value,
                [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
                [MIN_HEIGHT, MAX_HEIGHT],
                Extrapolate.CLAMP
            ),
            {
                duration: 100,
                easing: Easing.linear,
            }
        ),
    }));

    let titleStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            y.value,
            [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
            [0, 1],
            Extrapolate.CLAMP
        ),
    }));
    return (
        // <TouchableWithoutFeedback>
        // <Animated.View style={[styles.container]}>
            <Animated.View style={[styles.container, container]}>
            <Image source={picture} style={[styles.picture]} />
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
                <View style={styles.mainTitle}>
                    <Animated.View style={titleStyle}>
                        <Text style={styles.title}>{title.toUpperCase()}</Text>
                    </Animated.View>
                </View>
            </View>
        </Animated.View>
        // </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height: MAX_HEIGHT,
        justifyContent: "flex-end",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "500",
    },
    titleContainer: {
        maxHeight: MAX_HEIGHT * 0.61,
        justifyContent: "center",
        flex: 1,
    },
    mainTitle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        padding: 32,
        transform: [{ translateY: 64 }],
    },
    subtitle: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Card2;
