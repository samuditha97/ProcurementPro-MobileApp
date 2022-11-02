import React from "react";
import { StyleSheet, Text, View, Image, TextInput,TouchableHighlight ,ScrollView} from "react-native";


const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex:1 }} >
        <Image source={require('../assets/supply.jpg')} style={styles.images}/>
      </View>

      <ScrollView style={styles.container2} > 
      <View style={styles.inputContainer}>
             

             <TextInput style={styles.inputs}
                 placeholder="Name"
                 keyboardType="text"
                 underlineColorAndroid='transparent'
                 />
           </View>
           <View style={styles.inputContainer}>
                
   
             <TextInput style={styles.inputs}
                 placeholder="Example Label"
                 keyboardType="number-pad"
                 underlineColorAndroid='transparent'
                 />
           </View>
           <View style={styles.inputContainer}>
                
   
             <TextInput style={styles.inputs}
                 placeholder="Your Message"
                 keyboardType="default"
                 underlineColorAndroid='transparent'
                 />
           </View>
           <View style={styles.inputContainer}>
                
   
                <TextInput style={styles.inputs}
                    placeholder="Menu"
                    keyboardType="default"
                    underlineColorAndroid='transparent'
                    />
              </View>
              <View style={styles.inputContainer}>
                
              
                <TextInput style={styles.inputs}
                    placeholder="Date"
                    keyboardType="date"
                    underlineColorAndroid='transparent'
                    />
              </View>
              
           
    
   
           <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
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
  },
  images: {
    padding: 0,
    Flex: 1,
    height: 890
  },
  container2: {
    flex: 3,
    backgroundColor: '#FFEF00',
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    opacity: 0.8,
    marginTop: -500
  },
  inputContainer: {
    borderBottomColor: '#ffff',
    backgroundColor: '#FFF',
    borderRadius:1,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginTop: 50,
    flexDirection: 'row',
    alignItems:'center',
    opacity: 10.9,
    marginLeft: 60
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#64E986',
    flex:1,
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent: 'center'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width:250,
  borderRadius:1,
  marginLeft: 85,
  marginTop: 50,
  padding:5
},
loginButton: {
  backgroundColor: "#488AC7",
  opacity: 10.9
},
loginText: {
  color: 'white',
}
});

export default Flex;