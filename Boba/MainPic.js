import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect } from 'react'
const { width, height } = Dimensions.get("window");

const MainPic = ({bgColor, picture}) => {
  
  return (
      <View style={[styles.container, { backgroundColor: bgColor }]}>
          <View style={styles.image_container}>
              <Image
                    source={picture}
                  style={styles.picturestyle}
              />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width,
        position: "absolute",
        height,
    },
    image_container: {
        marginTop: 0.3 * height,
        width,
        height:0.4*height,
        backgroundColor:"peachpuff",
    },
    picturestyle: {
        width: width,
        height: 0.4 * height,
        objectFit: "cover",
    },
});
export default MainPic