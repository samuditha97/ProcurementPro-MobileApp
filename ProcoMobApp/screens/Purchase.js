import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function Purchase(props) {

  //order type drop down 
  const data = [
    { label: "Delivery", value: "1" },
    { label: "Manufacture", value: "2" },
    { label: "Retail", value: "3" },
  ];

  const [value, setValue] = useState(null);

  //measuring unit drop down
  const data2 = [
    { label: "Kilogram(Kg)", value: "1" },
    { label: "gram(g)", value: "2" },
  ];
  const [value2, setValue2] = useState(null);

  //supplier drop down
  const data3 = [
    { label: "Supplier 1", value: "1" },
    { label: "Supplier 2", value: "2" },
  ];
  const [value3, setValue3] = useState(null);


  
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
        <Text style={styles.text1}>Purchase Order</Text>
        <Image
          style={styles.image}
          source={require("../assets/purchase.jpg")}
        />
      </View>

      <ScrollView style={styles.container2}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Order Type"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Item Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
          />
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data2}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Measuring Unit"
          value={value2}
          onChange={(item) => {
            setValue2(item.value);
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Quantity"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.multiline}>
          <TextInput
            style={styles.inputs}
            placeholder= "Description"
            keyboardType="text"
            multiline={true}
            numberOfLines={5}     
            underlineColorAndroid="transparent"
          />
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data3}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Supplier"
          value={value3}
          onChange={(item) => {
            setValue3(item.value);
          }}
        />
           

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
        >
          <Text style={styles.loginText} >Purchase Order</Text>
        </TouchableHighlight>
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
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 1,
    marginLeft: 70,
    marginTop: 50,
    padding: 5,
  },
  loginButton: {
    backgroundColor: "#488AC7",
    opacity: 10.9,
  },
  loginText: {
    color: "white",
  },
  text1: {
    fontSize: 20,
    marginTop: 90,
    fontWeight: "bold",
    marginLeft: 130,
  },

  dropdown: {
    borderColor: "#254117",
    borderRadius: 2,
    borderWidth: 1,
    marginLeft: 50,
    height: 50,
    width: 300,
    marginTop: 40,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },

  image: {
    height: 400,
    width: 400,
    marginTop: 230,
    marginLeft: 160,
  },
  multiline: {
    borderColor: "#254117",
    backgroundColor: "#7C9D8E",
    borderRadius: 2,
    borderWidth: 1,
    width: 300,
    height: 65,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
