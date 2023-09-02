import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Chanel from "./Chanel";
import Chanel2 from "./Chanel2";
import Anim1 from "./Anim1";
import Catalogue from "./Snap1_Catalin/Catalogue";
import Pie_container from "./rgrim_pie_slider/Pie_container";
import Pie_container2 from "./rgrim_pie_slider/Pie_container2";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Three_Starter101 from "./Three/Starter101/Three_Starter101";
import Shared2 from "./Shared_Elements/React_Navigation_Doc/Shared2";
import Shared3 from "./Shared_Elements/Galaxy/Shared3";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// SplashScreen.preventAutoHideAsync();
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
    return (
        <View style={styles_doc.container}>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Details")} >
            </TouchableWithoutFeedback>
                <Animated.Image
                    source={{ uri: "https://picsum.photos/id/39/200" }}
                    style={{ width: 300, height: 300 }}
                    sharedTransitionTag="tag"
                />
        </View>
    );
}


function DetailsScreen({ navigation }) {
    return (
        <View style={styles_doc.container}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Animated.Image
                source={{ uri: "https://picsum.photos/id/39/200" }}
                style={{ width: 100, height: 100 }}
                sharedTransitionTag="tag"
            />

            <Text>this is line1</Text>
            <Text>this is line1</Text>
            <Text>this is line1</Text>
            <Text>this is line1</Text>
            <Text>this is line1</Text>

            <Text>
                this is a paragraph, this is nice to know that poeple still read
                and learn studd, but it is dis heartening to know that shared
                animations are not at par with ios in android
            </Text>

            <Text>
                this is a paragraph, this is nice to know that poeple still read
                and learn studd, but it is dis heartening to know that shared
                animations are not at par with ios in android
            </Text>

            <Text>
                this is a paragraph, this is nice to know that poeple still read
                and learn studd, but it is dis heartening to know that shared
                animations are not at par with ios in android
            </Text>
        </View>
    );
}



export default function App() {
    let [isfontsloaded] = useFonts({
        "playfair-medium": require("./fonts/Playfair/PlayfairDisplay-Medium.ttf"),
        "playfair-bold": require("./fonts/Playfair/PlayfairDisplay-Bold.ttf"),
        "playfair-regular": require("./fonts/Playfair/PlayfairDisplay-Regular.ttf"),
    });

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <Anim1 /> */}
            {/* <StatusBar hidden style="auto" /> */}
            {/* <Shared3 /> */}
            {/* <Pie_container2 /> */}
            {/* <Three_Starter101 /> */}
            {/* <Pie_container /> */}
            {/* <Chanel2 /> */}
            {/* <Catalogue /> */}
            {/* <Chanel /> */}
        </>
        // <View style={styles.container}>
        //  <Text>Open up App.js to start working on your app!</Text>
        // <Text>Open up App.js to start working on your app!</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


const styles_doc = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});