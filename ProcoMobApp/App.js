import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Purchase from './screens/Purchase';
import PlacedOrder from './screens/Placed_Order';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Purchase" component={Purchase} />
        <Drawer.Screen name="Placed Order" component={PlacedOrder} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

