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
import firebase from 'firebase'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
   alert('Welcome Back!')
   this.props.navigation.navigate('BottomTab')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  }
  render() {
    return (

 <View style={{  flex: 1 ,backgroundColor:"white", borderRadius:20,
              borderWidth:10,
              borderColor:"#ffc533" }}>
       <Image
            source={require("../assets/2ndimg.png")}
            
            style={{
            width: "90%",
              height: 360,
              marginTop: "10%",
              alignSelf: "center",
              borderRadius:20,
              borderWidth:10,
              borderColor:"white",
              
            }}
          />

        <ScrollView>
        
          <Text style={{  fontSize: 22, fontWeight: "bold", alignSelf:"center"}}>
            Login
          </Text>
           <View
            style={{
             flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
         <Feather name="at-sign" size={20} color="grey" /> 
            <TextInput
              style={{
                 width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Email ID"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
             flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="lock" size={20} color="grey" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
           
          </View>

          <Text
            style={{
              marginTop: 10,
              color: "black",
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginHorizontal: "5%",
              
            }}
            onPress={() => {
              this.props.navigation.navigate("ForgotPassword");
            }}
          >
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={{
               backgroundColor: "#8cc640",
              width: "40%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.login()
            }}
          >
            <Text style={{  fontSize: 18, color: "white" }}>Login</Text>
          </TouchableOpacity>

         
          <Text style={{ alignSelf: "center", marginTop: 30, color: "grey" }}>
            Dont have an account?
            <Text
              style={{ color: "black", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("SignUp");
              }}
            >
              {" "}
              SignUp
            </Text>{" "}
          </Text>
      
         
        </ScrollView>
      </View>
    );
  }
}











