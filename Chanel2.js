// import { View, Text, ScrollView } from "react-native";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import React from "react";
import { items } from "./Model";
import Card, { MAX_HEIGHT } from "./Card";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedScrollHandler,
} from "react-native-reanimated";
import Card2 from "./Card2";

const Chanel2 = () => {
    let y = useSharedValue(0);
    let onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            y.value = event.contentOffset.y;
            console.log(event.contentOffset);
        },
    });
    return (
        <Animated.ScrollView
            // scrollEventThrottle={16}
            onScroll={onScroll}
            contentContainerStyle={{ height: (items.length + 1) * MAX_HEIGHT }}
            snapToInterval={MAX_HEIGHT}
            decelerationRate="fast"
            
        >   
            {items.map((item, index) => (
                <Card2 y={y} index={index} item={item} key={index} />
            ))}
        </Animated.ScrollView>
    );
};

export default Chanel2;
