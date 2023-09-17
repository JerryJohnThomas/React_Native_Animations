
import React from "react";
import { StyleSheet, View , Dimensions} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

export default function AnimCircle() {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ scale: offset.value }],
    }));

    React.useEffect(() => {
        offset.value = withTiming(1, { duration: 1500 });
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    box: {
        height: width / 2,
        width: width / 2,
        backgroundColor: "#b58df1",
        // backgroundColor: "#f39402",
        borderRadius: width/4,
    },
});
