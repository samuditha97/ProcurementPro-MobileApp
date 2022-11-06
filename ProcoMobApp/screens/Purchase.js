import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const Purchase = () => {
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [unit, setUnit] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [description, setDescription] = useState(null);
  const [supplier, setSupplier] = useState(null);
  const [data3, setData3] = useState([{ label: null, value: null }]);

  const data = [
    { label: "Delivery", value: "1" },
    { label: "Manufacture", value: "2" },
    { label: "Retail", value: "3" },
  ];
  const data2 = [
    { label: "Kilogram(Kg)", value: "1" },
    { label: "gram(g)", value: "2" },
  ];

  const reset = () => {
    setType(null);
    setName(null);
    setUnit(null);
    setQuantity(null);
    setDescription(null);
    setSupplier(null);
  };

  useEffect(() => {
    const validate = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) navigation.navigate("Login");
    };
    validate();
    reset();
  }, []);

  useEffect(() => {
    const getSuppliers = async () => {
      const token = await AsyncStorage.getItem("token");
      await axios
        .get("https://pms-92dm.onrender.com/api/supplier", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            const sups = res.data?.data;
            const s = sups?.map((sup) => {
              return {
                label: sup?.company,
                value: sup?._id,
              };
            });
            setData3(s);
          }
        });
    };
    getSuppliers();
  }, []);

  const handlePlaceOrder = async () => {
    if (!type) alert("Please, select an order type");
    else if (!name) alert("Please, enter an item name");
    else if (!unit) alert("Please, select an measuring unit");
    else if (!quantity) alert("Please, enter the quantity");
    else if (!description) alert("Please, enter the description");
    else if (!supplier) alert("Please, select a supplier");
    else {
      const token = await AsyncStorage.getItem("token");
      await axios
        .post(
          "https://pms-92dm.onrender.com/api/orderNew",
          {
            ordertype: type,
            itemName: name,
            measuringUnit: unit,
            quantity: unit,
            description: description,
            supplierID: supplier,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            reset();
            alert("Order placed success.");
          } else {
            alert("Oops... Something went wrong!");
          }
        })
        .catch(() => alert("Oops... Something went wrong!"));
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
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
          value={type}
          onChange={(item) => {
            setType(item.value);
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Item Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setName(text)}
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
          value={unit}
          onChange={(item) => {
            setUnit(item.value);
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Quantity"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setQuantity(text)}
          />
        </View>
        <View style={styles.multiline}>
          <TextInput
            style={styles.inputs}
            placeholder="Description"
            keyboardType="text"
            multiline={true}
            numberOfLines={5}
            underlineColorAndroid="transparent"
            onChangeText={(text) => setDescription(text)}
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
          value={supplier}
          onChange={(item) => {
            setSupplier(item.value);
          }}
        />

        <TouchableHighlight
          onPress={handlePlaceOrder}
          style={[styles.buttonContainer, styles.loginButton]}
        >
          <Text style={styles.loginText}>Purchase Order</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

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
    zIndex: 1,
    backgroundColor: "#E8E4C9",
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
    backgroundColor: "transparent",
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

export default Purchase;
