import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chanel from "./Chanel";
import Anim1 from "./Anim1";

export default function App() {
    return (
        <>
            {/* <Anim1 /> */}
            <StatusBar hidden style="auto" />
            <Chanel />
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
