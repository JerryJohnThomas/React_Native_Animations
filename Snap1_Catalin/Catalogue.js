import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    FlatList,
    Image,
} from "react-native";
import React from "react";
import { Movies } from "./data";
import Rating from "./Rating";
import Dot from "./Dot";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";
import BackDrop from "./BackDrop";
// import { FlatList } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const ITEM_factor = 0.82;
const Full_width = 1;

const Catalogue = () => {
    let scrollx = useSharedValue(0);

    let scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollx.value = event.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <BackDrop Movies={Movies} scrollx={scrollx} />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={Movies}
                keyExtractor={(item) => item.key}
                horizontal
                snapToInterval={width}
                onScroll={scrollHandler}
                // decelerationRate={20}
                bounces={false}
                contentContainerStyle={{
                    alignItems: "flex-end",
                }}
                renderItem={({ item, index }) => {
                    let inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];
                    let outputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width,
                    ];

                    return <Card item={item} />;
                }}
            ></Animated.FlatList>
        </View>
    );
};

let Card = ({ item: { title, stars, picture } }) => {
    return (
        <View style={styles.cardcontainer}>
            <Image
                source={picture}
                style={styles.card_image}
                resizeMode="contain"
            />
            <Text style={styles.card_title}>{title}</Text>
            <Rating rating={stars} />
            <Dot dots={3} />
        </View>
    );
};

export default Catalogue;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornsilk",
    },
    cardcontainer: {
        backgroundColor: "white",
        width: width * ITEM_factor,
        margin: width * ((Full_width - ITEM_factor) / 2),
        marginTop: 0,
        marginBottom: 0,
        height: height * 0.82,
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: "center",
    },
    card_image: {
        marginTop: 30,
        width: "80%",
        height: "65%",
        borderRadius: 10,
    },
    card_title: {
        fontSize: 32,
        marginTop: 10,
        fontWeight: "500",
    },
});
