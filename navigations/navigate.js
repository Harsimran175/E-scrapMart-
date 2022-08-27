import React from 'react';
import {View} from "react-native"
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AboutUs from '../screens/AboutUs';
import Loading from '../screens/Loading';
import ForgotPassword from '../screens/ForgotPassword';
import Form from '../screens/Form'
import SubmissionList from '../screens/SubmissionList';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import BottomTab from '../screens/BottomTab';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

    function MyStack() { 
    return (
       <Stack.Navigator>
        
         <Stack.Screen name="Welcome" component={Welcome}options={{headerShown:false}} />
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
           <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}} /> 
             
     <Stack.Screen name="Home" component={Home}options={{headerShown:true}} />
 <Stack.Screen name="ForgotPassword" component={ForgotPassword}options={{headerShown:true}} />

     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> 
      
      <Stack.Screen name="BottomTab" component={BottomTab}options={{headerShown:false}} />
      <Stack.Screen name="SubmissionList" component={SubmissionList} options={{title: 'My PickUp List',
           headerTitleStyle: {
              color: '#8cc640'
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#8cc640",borderWidth:5,borderRadius:20,
            },}}  />  
      
         
        <Stack.Screen name="Form" component={Form} options={{title: 'Pick Up Form',
           headerTitleStyle: {
              color: '#8cc640'
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#8cc640",borderWidth:5,borderRadius:20,
            },}}  /> 
      </Stack.Navigator>
    );
  }

  export default MyStack;