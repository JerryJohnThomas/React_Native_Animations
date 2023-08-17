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
import Text_Card from "./Text_Card";
import BackDrop from "./BackDrop";
import Pies from "./Pies";
const { width, height } = Dimensions.get("window");

const Pie_container2 = () => {
    let scrollx = useSharedValue(0);

    let scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollx.value = event.contentOffset.x;
        },
    });

    return (
        <View>
            <BackDrop scrollx={scrollx} data={pie_data} />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={pie_data}
                keyExtractor={(item) => item.key}
                horizontal
                snapToInterval={width}
                onScroll={scrollHandler}
                bounces={false}
                renderItem={({ item, index }) => {
                    return (
                        <Text_Card
                            item={item}
                            index={index}
                            scrollx={scrollx}
                        />
                    );
                }}
            ></Animated.FlatList>
            <Pies scrollx={scrollx} data={pie_data} />
        </View>
    );
};

const styles = StyleSheet.create({
    bdcard_style: {
        width: width,
        height: height,
        backgroundColor: "green",
    },
});


export default Pie_container2;
