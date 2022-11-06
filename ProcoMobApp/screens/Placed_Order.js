import React, { PureComponent} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import axios from "axios";


export default class Placed_Order extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    this.getDataFromAPI()
  }

getDataFromAPI =async () => {
  const endpoint = 'http://192.168.8.171:5000/api/orderNew/'
  const res = await axios.get(endpoint)
  const data = await res.json()
  this.setState({items: data})
}    

  _renderItem = ({item, index}) =>{
  let {cardText,card} = styles

  return(
    <TouchableOpacity style={card}>
      <Text style={cardText}>{item.itemName}</Text>
      <Text style={cardText}>{item.orderType}</Text>
      </TouchableOpacity>
    
  )
  }
  render() {
    let { container3} = styles
    let {items} = this.state
    return(
    // <View
    //   style={[
    //     styles.container,
    //     {
    //       // Try setting `flexDirection` to `"row"`.
    //       flexDirection: "column",
    //     },
    //   ]}
    // >
    //   <View style={{ flex: 1 }}>
    //     <Text style={styles.text1}>Placed Order Requests</Text>
    //     <Image
    //       style={styles.image}
    //       source={require("../assets/placed.jpg")}
    //     />
    //   </View>
          <FlatList
          style={container3}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
          />

    // </View>
    

  );
}


}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 0,
  //   backgroundColor: "#FFF",
  // },
  // images: {
  //   padding: 0,
  //   Flex: 1,
  //   height: 890,
  // },
  // container2: {
  //   flex: 3,
  //   backgroundColor: "#E8E4C9",
  //   borderTopLeftRadius: 700,
  //   marginLeft: 10,
  //   marginBottom: 1,
  //   marginTop: -500,
  //   opacity: 0.9,

  //   shadowColor: "#A3D",
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 3,
  // },
  // inputContainer: {
  //   borderColor: "#254117",
  //   borderRadius: 2,
  //   borderWidth: 1,
  //   width: 300,
  //   height: 45,
  //   marginTop: 40,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginLeft: 50,
  // },
  // inputs: {
  //   height: 45,
  //   marginLeft: 16,
  //   flex: 1,
  // },

  // text1: {
  //   fontSize: 20,
  //   marginTop: 80,
  //   fontWeight: "bold",
  //   marginLeft: 100,
  // },
  // image: {
  //   height: 400,
  //   width: 400,
  //   marginTop: 230,
  //   marginLeft: 160,
  // },
  
  cardText: {
    fontSize: 10,
    
  },
  container3: {
    marginTop: 40,
    flex: 1,

   
  },
  card: {
    backgroundColor: '#7C9D8E',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    height: 100,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 5,
    shadowOffset: {
      width: 3,
      height: 20

  }
}
});
