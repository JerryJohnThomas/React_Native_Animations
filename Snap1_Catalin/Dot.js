import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function Dot({ dots }) {
    const r = [...Array(dots).fill("dot-single")];

    return (
        <View style={styles.rating}>
            {r.map((type, index) => {
                return (
                    <Text key={index} style={{fontSize:54}}>.</Text>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    ratingNumber: { marginRight: 4, fontSize: 18 },
    rating: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        marginVertical: -34,
    },
});
