import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contact: '',
      pincode: '',
      pickuparea: '',
      pickupdate: '',
      scrapdetails: '',
    };
  }

  sendWhatsapp = () => {
    var number = '8573443280';
    Linking.openURL(
      'http://api.whatsapp.com/send?phone=1' +
        number +
        '&text=I am interested in the E-scrapmart app'
    );
  };

  addData = () => {
    db.collection('request').add({
      userEmail: firebase.auth().currentUser.email,
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      pincode: this.state.pincode,
      pickuparea: this.state.pickuparea,
      pickupdate: this.state.pickupdate,
      scrapdetails: this.state.scrapdetails,
    });
    alert('Request submitted Successfully!');
    this.props.navigation.navigate('SubmissionList');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 20,
          borderWidth: 10,
          borderColor: '#ffc533',
        }}>
        <ScrollView>
          <Image
            source={require('../assets/RRR.jpg')}
            style={{
              width: '100%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 10,
              borderWidth: 5,
              borderColor: '#8cc640',
            }}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              width: '100%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: '110%',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="person" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                }}
                placeholder="Your Name"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ name: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="email" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                }}
                placeholder="Email-Id"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="phone" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  borderBottomWidth: 1,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                }}
                placeholder="Contact No"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ contact: val });
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="address-book" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="PinCode"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ pincode: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="home" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Pick Up Area"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ pickuparea: val });
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="address" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Pick Up Date"
                placeholderTextColor="#8cc640"
                onChangeText={(val) => {
                  this.setState({ pickupdate: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="details" size={20} color="#8cc640" />
              <TextInput
                style={{
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingLeft: 10,
                  borderBottomColor: '#8cc640',
                  borderBottomWidth: 1,
                }}
                placeholder="Scrap Details"
                placeholderTextColor="#8cc640"
                multiline={true}
                numberOfLines={20}
                onChangeText={(val) => {
                  this.setState({ scrapdetails: val });
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#8cc640',
                width: '50%',
                height: 40,
                marginTop: '10%',
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (
                  this.state.name &&
                  this.state.email &&
                  this.state.contact &&
                  this.state.pincode &&
                  this.state.pickuparea &&
                  this.state.pickupdate &&
                  this.state.scrapdetails
                ) {
                  this.addData();
                  this.sendWhatsapp();
                }
              }}>
              <Text style={{ fontSize: 18, color: 'white' }}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
