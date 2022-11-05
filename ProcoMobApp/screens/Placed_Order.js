import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function Placed_Order() {

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.text1}>Placed Order Requests</Text>
        <Image
          style={styles.image}
          source={require("../assets/placed.jpg")}
        />
      </View>

      <ScrollView style={styles.container2}>
        
      </ScrollView>
    </View>
    

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#FFF",
  },
  images: {
    padding: 0,
    Flex: 1,
    height: 890,
  },
  container2: {
    flex: 3,
    backgroundColor: "#E8E4C9",
    borderTopLeftRadius: 700,
    marginLeft: 10,
    marginBottom: 1,
    marginTop: -630,
    opacity: 0.9,

    shadowColor: "#A3D",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputContainer: {
    borderColor: "#254117",
    borderRadius: 2,
    borderWidth: 1,
    width: 300,
    height: 45,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },

  text1: {
    fontSize: 20,
    marginTop: 80,
    fontWeight: "bold",
    marginLeft: 100,
  },

  

  image: {
    height: 400,
    width: 400,
    marginTop: 230,
    marginLeft: 160,
  },
 
});
