import React from 'react';
import { View ,ImageBackground } from 'react-native';


export default function Background({Children}) {
  return (
    <View >
    <ImageBackground source={require("../assets/cover.jpg")} style ={{height: '100%'}} />
     <View style={{position: 'absolute'}} >
      {Children}
     </View>
  </View>
  );
}
