import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Home from "./Boba/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
    return (
        <>
            {/* <SafeAreaProvider> */}
                <StatusBar hidden style="auto" />
                <Home />
            {/* </SafeAreaProvider> */}
        </>
    );
};

export default App;
