import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class Welcome extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:"white", borderRadius:20,
              borderWidth:10,
              borderColor:"#ffc533"}}>
    
   
            <Image
      source={require("../assets/1stimg.png")}

  
      style={{ width: "90%",
              height: 420,
              marginTop: "10%",
              alignSelf: "center",
              borderRadius:20,
              borderWidth:10,
              borderColor:"white",
           
            }}
      
  /> 
         <Text style={{padding:10,fontWeight:"bold",color:"black",fontSize:26,alignSelf:"center",marginTop:"5%",textShadowColor:"white",textShadowOffset:{width:2,height:2}}}>E-Scrapmart</Text>
          
             <TouchableOpacity style={{alignSelf:"center",marginTop:"5%",borderRadius:10,width:190,backgroundColor:"#8cc640"}}
            onPress={() => {
                        this.props.navigation.navigate("Login");
                      }}
                    >
                    <Text style={{padding:10,fontWeight:"bold",color:"white",fontSize:16,alignSelf:"center"}}>
                    Get Started</Text>
            </TouchableOpacity>
  
          
    
      
      </View>
    );
  }
}