import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from 'react'
const { width, height } = Dimensions.get("window");

const CirclePic = ({ bgColor, picture,index, highlighted }) => {
    let displacement = 30;
    
    return (
        <View>
            <Image
                source={picture}
                style={[
                    styles.picturestyle,
                    {
                        transform: [
                            {
                                translateY:
                                    displacement * 2.5 -
                                    displacement * Math.abs(index - 2.5),
                            },
                        ],
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    picturestyle: {
        width: width / 7,
        height: width / 7,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 2,
        objectFit: "cover",
    },
});

export default CirclePic