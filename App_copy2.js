import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
    Dimensions,
    FlatList,
    ListRenderItemInfo,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import Animated, {
    Easing,
    SharedTransition,
    withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const SIZE_IMAGE = width / 3;

const dataImages = [
    "https://fastly.picsum.photos/id/756/300/300.jpg?hmac=ihyfC35Qzh798wqV3x_k5A3jEaY9lRiC4w1azntXksM",
    "https://fastly.picsum.photos/id/71/300/300.jpg?hmac=lavbXU_aeHIi1agvKBKJYbgbtDFTCCdGDuzngtJVQjE",
    "https://fastly.picsum.photos/id/1012/300/300.jpg?hmac=FpdcKpoTxl0CZdLj7RjrTjISpiu8TtsesR9f4Fm2yOk",
    "https://fastly.picsum.photos/id/794/300/300.jpg?hmac=EOGWbvHbcjble_4y30-aBz6-AcjjWyNAfFlbfmS1r9U",
    "https://fastly.picsum.photos/id/634/300/300.jpg?hmac=Xydl14x40_5ZjRDqaIAqxyQcuSub_xDcabmUtuE-eD8",
    "https://fastly.picsum.photos/id/862/300/300.jpg?hmac=omllSASwYQXWPO584bLQUz6GetRL0GRe-2QctRXVnJA",
    "https://fastly.picsum.photos/id/3/300/300.jpg?hmac=RT2JK6MzdIgNIWoIj61uPcz8aOSOi3lu2vhnwOxs7lY",
    "https://fastly.picsum.photos/id/639/300/300.jpg?hmac=dQz9oW6E7gTcgpjQvsXItRygy6Z5kL2mc5sqN8bTeRw",
    "https://fastly.picsum.photos/id/840/300/300.jpg?hmac=jYWhgnilJlqSvqrNyakWLPa67a5HJcAVGKo5vbXfJWc",
    "https://fastly.picsum.photos/id/994/300/300.jpg?hmac=GDm1Mpq1ylmjwx5Dv9u-l1nNEAKFDBQyanBzp7Nl4yg",
    "https://fastly.picsum.photos/id/242/300/300.jpg?hmac=o4XyRlR53cSyXOhNnSoYw3pNc6AiUawAVed124gdQZs",
    "https://fastly.picsum.photos/id/857/300/300.jpg?hmac=_2o0QaHplHuWOr4ETeEP5_3Wo6lgNhoxZgeb0yjFckc",
    "https://fastly.picsum.photos/id/217/300/300.jpg?hmac=BsPwAcRl68EZm3jQkeJOcTySx7bzPELlYkwkkl-itpc",
    "https://fastly.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    "https://fastly.picsum.photos/id/858/300/300.jpg?hmac=_ejZ2a4fSroS4BO_gXXIxq7hyd0RIHSP290jgbqMO2c",
];

const transition = SharedTransition.custom((values) => {
    "worklet";
    return {
        width: withTiming(values.targetWidth, {
            easing: Easing.quad,
        }),
        height: withTiming(values.targetHeight, {
            easing: Easing.quad,
        }),
        originX: withTiming(values.targetOriginX, {
            easing: Easing.quad,
        }),
        originY: withTiming(values.targetOriginY, {
            easing: Easing.quad,
        }),
    };
});

const GalleryItem = ({ url }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback 
            onPress={() => {
                navigation.navigate("Detail", { url });
            }}
        >
            <Animated.View
                sharedTransitionTag={`container_${url}`}
                sharedTransitionStyle={transition}
                style={styles.image}
            >
                <Animated.Image
                    sharedTransitionTag={`image_${url}`}
                    sharedTransitionStyle={transition}
                    resizeMode="cover"
                    source={{ uri: url }}
                    style={StyleSheet.absoluteFillObject}
                />
            </Animated.View>
        </TouchableWithoutFeedback >
    );
};

const ListImage = () => {
    // func
    const renderImage = ({ item }: ListRenderItemInfo<string>) => {
        return <GalleryItem url={item} />;
    };

    const keyExtractor = (item: string) => {
        return item;
    };

    // render
    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                numColumns={3}
                renderItem={renderImage}
                keyExtractor={keyExtractor}
                data={dataImages}
            />
        </SafeAreaView>
    );
};

const DetailImage = ({
    route: {
        params: { url },
    },
}) => {
    return (
        <>
            <SafeAreaView style={styles.root}>
                <Animated.View
                    sharedTransitionTag={`container_${url}`}
                    sharedTransitionStyle={transition}
                    style={styles.detailImage}
                >
                    <Animated.Image
                        sharedTransitionTag={`image_${url}`}
                        sharedTransitionStyle={transition}
                        resizeMode="cover"
                        source={{ uri: url }}
                        style={StyleSheet.absoluteFillObject}
                    />
                </Animated.View>
            </SafeAreaView>
        </>
    );
};

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="List" component={ListImage} />
                <Stack.Screen name="Detail" component={DetailImage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    detailImage: {
        width: width,
        height: 200,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        justifyContent: "center",
        alignItems: "center",
        width: SIZE_IMAGE,
        height: SIZE_IMAGE,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
    },
});

export default App;
