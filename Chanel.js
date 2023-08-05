// import { View, Text, ScrollView } from "react-native";
import { View, Text } from "react-native";
import {
    GestureHandlerRootView,
    PanGestureHandler,
    ScrollView,
} from "react-native-gesture-handler";

import React from "react";
import { items } from "./Model";
import Card, { MAX_HEIGHT } from "./Card";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useAnimatedScrollHandler,
    useAnimatedGestureHandler,
} from "react-native-reanimated";
import Card2 from "./Card2";
import { clamp, snapPoint } from "react-native-redash";


const Chanel = () => {
    let factor = 1;
    let y = useSharedValue(0);
    let snapPoints = items.map((_,i) => i*-MAX_HEIGHT);
    let onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, ctx) =>{
            ctx.y = y.value;
        },
        onActive: (event, ctx) => {
            let val =  event.translationY*factor + ctx.y;
            // if(val >= 0 ) val = 0;
            // if(val < -(items.length-1)*MAX_HEIGHT) val = -(items.length - 1) * MAX_HEIGHT;
            y.value=clamp(val, -(items.length - 1) * MAX_HEIGHT, 0);
            console.log(y.value);
        },
        onEnd: (event, ctx) => {
            let dest = snapPoint(y.value, event.velocityY, snapPoints);
            y.value = withSpring(dest, { damping: 100});
        }
    });

    return (
        <GestureHandlerRootView>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View>
                    {items.map((item, index) => (
                        <Card y={y} index={index} item={item} key={index} />
                    ))}
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

export default Chanel;
