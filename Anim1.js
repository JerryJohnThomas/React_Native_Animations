import { Button, StyleSheet, View, Text } from "react-native";
import React from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";

const Anim1 = () => {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        };
    });
    return (
        <>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button
                onPress={() => (offset.value = withSpring(Math.random()))}
                title="Move"
                style={styles.btnstyle}
            />
            <Button
                onPress={() => (offset.value = withSpring(0))}
                title="Move2"
                style={styles.btnstyle}
            />
            <Button
                onPress={() => (offset.value = withSpring(0.9))}
                title="Move3"
                style={styles.btnstyle}
            />
            <Button
                onPress={() => (offset.value = 0.5)}
                title="Move4"
                style={styles.btnstyle}
            />
        </>
    );
};
const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        backgroundColor: "blue",
    },
    btnstyle: {
        width: 100,
    },
});

export default Anim1;
