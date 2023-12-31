
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
} from "react-native-reanimated";

export default function AnimBox() {
    const offset = useSharedValue(200);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    React.useEffect(() => {
        offset.value = withRepeat(
            // highlight-next-line
            withTiming(-offset.value, { duration: 1500 }),
            -1,
            true
        );
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
        height: 220,
        width: 220,
        backgroundColor: "#b58df1",
        backgroundColor: "#f39402",
        borderRadius: 20,
    },
});
// export default AnimBox
