import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const CirclePic = ({
    bgColor,
    picture,
    index,
    active,
    setActive,
    highlighted,
}) => {
    let displacement = 30;

    return (
        <TouchableWithoutFeedback onPress={() => setActive(() => index)}>
            <View>
                <Image
                    source={picture}
                    style={[
                        styles.picturestyle,
                        {
                            marginTop:
                                displacement * 2.5 -
                                displacement * Math.abs(index - 2.5),
                        },
                        // {
                        //     transform: [
                        //         {
                        //             translateY:
                        //                 displacement * 2.5 -
                        //                 displacement * Math.abs(index - 2.5),
                        //         },
                        //     ],
                        // },
                        active == index ? { borderColor: "white" } : {borderColor:"orange"},
                    ]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    picturestyle: {
        width: width / 7,
        height: width / 7,
        borderRadius: 50,
        borderWidth: 2,
        objectFit: "cover",
    },
});

export default CirclePic;
