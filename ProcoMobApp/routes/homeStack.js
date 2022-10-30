import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import Order from '../screens/order';

const screens = {
    Home: {
        screen: Home
    },
    Order: {
        screen: Order
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);