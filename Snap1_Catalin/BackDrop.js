import { StyleSheet, Dimensions, View, Text, Image , FlatList } from "react-native";
import React from 'react';
const { width, height } = Dimensions.get("window");

import MaskedView from "@react-native-masked-view/masked-view";
import { Svg } from "react-native-svg";
import Rect from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";

const BACKDROP_HEIGHT = height;

const BackDrop = ({Movies, scrollx}) => {
  return (
      <View style={{ position: "absolute", width, height: BACKDROP_HEIGHT }}>
          <Text>BackDrop</Text>
          <Animated.FlatList
              showsHorizontalScrollIndicator={false}
              data={Movies}
              keyExtractor={(item) => item.key}
              horizontal
              snapToInterval={width}
              bounces={false}
              contentContainerStyle={{
                  alignItems: "flex-end",
              }}
              renderItem={({ item, index }) => {
                 
                  return (
                    <MaskedView 
                    
                    >

                          <Image source={item.picture} style={styles.bg_img} />
                    </MaskedView>
                  );
              }}

          ></Animated.FlatList>
            <LinearGradient
                colors={['transparent', 'white']}
                style={styles.lg}
            ></LinearGradient>
      </View>
  );
}

export default BackDrop;

const styles = StyleSheet.create({
    bg_img: {
        width: width,
        height: BACKDROP_HEIGHT,
        resizeMode: "cover",
    },
    lg: {
        height: BACKDROP_HEIGHT,
        width: width,
        position:'absolute',
        bottom: 0,
    },
});
