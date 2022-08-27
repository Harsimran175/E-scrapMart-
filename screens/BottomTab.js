import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Ionicons";
import {MaterialIcons} from "@expo/vector-icons";
import SubmissionList from "./SubmissionList"
import Home from "./Home";
import Form from "./Form"
import AboutUs from "./AboutUs"
const Tab = createBottomTabNavigator();
import { RFValue } from "react-native-responsive-fontsize";
export default class BottomTab extends Component {
  render() {
    return (
       <Tab.Navigator
      
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return<Ionicons name="md-home" size={24} color={color} />
          } else if (route.name === 'Form') {
            return<Ionicons name="newspaper" size={24} color={color} />
          }else if (route.name === 'SubmissionList') {
            return<Ionicons name="list-circle-sharp" size={24} color={color} />
          }else if (route.name === 'AboutUs') {
            return<Ionicons name="location" size={24} color={color} />
          }

          
        },
        
        tabBarActiveTintColor: '#8cc640',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: "10%",
          paddingVertical:15,
          borderRadius:20,
          borderColor:"#8cc640",
          borderWidth:5
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Form" component={Form}    options={{ title: 'Pick Up Form',
           headerTitleStyle: {
              color: '#8cc640',justifyContent:"center"
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#ffc533",borderWidth:5,borderRadius:20
            },}}/>
            <Tab.Screen name="SubmissionList" component={SubmissionList}    options={{ title: 'My Pickup List',
           headerTitleStyle: {
              color: '#8cc640',justifyContent:"center"
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#ffc533",borderWidth:5,borderRadius:20
            },}}/>
        <Tab.Screen name="AboutUs" component={AboutUs}    options={{ headerShown:false}}/>
   
       
    </Tab.Navigator>
  );
}
}