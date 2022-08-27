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
import db from '../config'
import firebase from 'firebase';
export default class SignUp extends React.Component {
  signUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    alert('User created!');

    db.collection('users').add({email:this.state.email, name:'Test!', password:this.state.password})

    this.props.navigation.replace('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    
  });
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:"white", borderRadius:20,
              borderWidth:10,
              borderColor:"#ffc533" }}>
        <ScrollView>
          <Image
            source={require("../assets/3rdimg.png")}
            style={{
           width: "90%",
              height: 340,
              marginTop: "00%",
              alignSelf: "center",
              borderRadius:20,
              borderWidth:10,
              borderColor:"white"
            }}
          />

          <Text style={{ fontSize: 22, fontWeight: "bold", alignSelf:"center" }}>
            Sign Up
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
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
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Password"
              onChangeText={(val) => {
                this.setState({ password: val });
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
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Confirm Password"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#8cc640",
              width: "50%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.signUp()
            }}
          >
             <Text style={{ fontSize: 15, color: "white",alignSelf:"center" ,fontWeight:"bold"}}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", marginTop: 20, color: "black",fontSize:17 }}>
            Already have an account?
            <Text
              style={{ color: "black", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("Login");
              }}
            >
              {" "}
              Login
            </Text>{" "}
          </Text>
     
        </ScrollView>
      </View>
    );
  }
}
