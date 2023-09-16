import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Home from "./Boba/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
    return (
        <>
        <SafeAreaProvider>
                <Home />
        </SafeAreaProvider>
        </>
    );
};

export default App;
