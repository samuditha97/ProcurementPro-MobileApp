import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const Signup = ({ navigation }) => {
  const data = [
    { label: "Procurement", value: "PROCUREMENT" },
    { label: "Management", value: "MANAGEMENT" },
    { label: "Onsite", value: "ONSITE" },
    { label: "Other", value: "OTHER" },
  ];

  const [name, setName] = useState(null);
  const [nic, setNIC] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [department, setDepartment] = useState(null);
  const [password, setPassword] = useState(null);

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const reset = () => {
    setName(null);
    setNIC(null);
    setEmail(null);
    setMobile(null);
    setDepartment(null);
    setPassword(null);
  };

  const handleRegister = async () => {
    let role;
    if (!name) alert("Please, enter a name");
    else if (!nic) alert("Please, enter the NIC");
    else if (!String(email).match(emailRegEx)) {
      alert("Please, enter a valid email");
    } else if (!mobile) alert("Please, enter a mobile number");
    else if (!department) alert("Please, select a department");
    else if (!password && password.length() > 6)
      alert("Please, enter a valid password");
    else {
      switch (department) {
        case "PROCUREMENT":
          role = "PROCUREMENT";
          break;
        case "MANAGEMENT":
          role = "SENIOR";
          break;
        case "ONSITE":
          role = "SITE_MANAGER";
          break;
        case "OTHER":
          role = "SUPPLIER";
          break;
        default:
          role = null;
      }
      await axios
        .post("https://pms-92dm.onrender.com/api/user/", {
          name,
          nic,
          email,
          mobile,
          department,
          role,
          password,
        })
        .then(async (res) => {
          if (res?.status === 200) {
            reset();
            alert("Registration success!");
          } else {
            alert("Oops... Something went wrong!");
          }
        })
        .catch(() => {
          alert("Oops... Something went wrong!");
        });
    }
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.body}
    >
      <Image source={require("../assets/cvr.jpg")} style={styles.cover} />
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.coverTextContainer}>
            <Text style={styles.h4}>Welcome to</Text>
            <Text style={styles.h3}>The Procurement Management Portal</Text>
          </View>
          <Text style={styles.label}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            keyboardType="text"
            underlineColorAndroid="transparent"
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={styles.input}
            placeholder="NIC"
            keyboardType="text"
            underlineColorAndroid="transparent"
            onChangeText={(nic) => setNIC(nic)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            onChangeText={(mobile) => setMobile(mobile)}
          />
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Department"
            value={department}
            onChange={(item) => {
              setDepartment(item.value);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableHighlight style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
          <View style={styles.row}>
            <Text>Already have an account?</Text>
            <TouchableHighlight
              style={styles.transparentButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.signupText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    display: "flex",
  },
  cover: {
    display: "flex",
    height: "100%",
    maxHeight: "26%",
    resizeMode: "cover",
    width: "100%",
  },
  container: {
    display: "flex",
    height: "74%",
    flexDirection: "column",
    padding: 30,
  },
  innerContainer: {
    display: "flex",
    height: "100%",
  },
  coverTextContainer: {
    marginBottom: 20,
  },
  h4: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },
  h3: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  input: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    borderRadius: 8,
    marginVertical: 6,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  transparentButton: {
    backgroundColor: "transparent",
  },
  signupText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 3,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  dropdown: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});
