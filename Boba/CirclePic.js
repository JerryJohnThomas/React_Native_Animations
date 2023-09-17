import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
const { width, height } = Dimensions.get("window");

const CirclePic = ({
    bgColor,
    picture,
    index,
    active,
    setActive,
    pressHandler,
    highlighted,
    modifyCirclePos
}) => {
    let displacement = 30;

    let circleRef = useRef(null);

    let Magic = () => {
        if (circleRef.current) {
            circleRef.current.measure((x,y,width, height, pageX, pageY) => {
                // console.log("Count ", index,  " Width:", width, "   Height:", height, "Page X:", pageX, "Page Y:", pageY); // Width of the element
                let obj = { x: pageX, y: pageY, h: height, w: width, count:index };
                modifyCirclePos(index, obj);
            });
        }
    };

    useLayoutEffect(()=>{
        Magic();
    },[])

    return (
        <TouchableWithoutFeedback onPress={() => pressHandler(index)}>
            <View>
                <Image
                    ref={circleRef}
                    source={picture}
                    style={[
                        styles.picturestyle,
                        {
                            marginTop:
                                displacement * 2.5 -
                                displacement * Math.abs(index - 2.5),
                        },
                        active == index ? { borderColor: "white" } : null,
                    ]}
                    onLoadEnd={() => Magic()}
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
