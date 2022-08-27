import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
//main axis - justifyContent
//cross axis - alignItems
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
//alignSelf, justifyContent, alignItems, margin and padding
import { Header, Icon, Avatar } from 'react-native-elements';
export default class AboutUs extends React.Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
    Alert.alert('Logout Successfully');
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
        <View style={{ flex: 1,borderColor:"#ffc533",borderWidth:5,borderRadius:20, }}>
          <Header
            centerComponent={{
              text: 'Contact Us',
              style: {
                margin: 2,
                padding: 2,
                fontWeight: 'bold',
                fontSize: 19,
                 color: '#8cc640',
            
                 
              },
            }}
            backgroundColor={'white'}
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="black"
                onPress={() => this.props.navigation.goBack()}></Icon>
            }
                        rightComponent={
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color="#000000"
                style={{ marginTop: 5 }}
                onPress={() => {
                  this.logout();
                }}
              />
            }
          />
          </View>
        
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold',  }}>
              About E-Scrapmart
            </Text>
           
          </View>
          <View style={{ margin: '3%' }}>
            <Text>
              E-Scrapmart is a door to door scrap collection and recycling
              service.{' '}
            </Text>
            <Text> </Text>

            <Text>
              ES app is a collaboration of experienced scrap recyclers and
              technology geeks with an aim of solving the long standard issue of
              hassle-free recycling of scrap.
            </Text>
            <Text> </Text>

            <Text>
              This app will help with technology and decide to launch this
              online portal. This app gives the tech to our consumers of
              "converting waste into wealth" with a click, and ensure
              transperancy, accuracy, and safety of our consumers and recyclers.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: '3%',
              marginTop: '5%',
            }}>
            <MaterialIcons name="phone" size={27} color="#8cc640" />
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', marginLeft: '5%' }}>
              Contact Us
            </Text>
          </View>
          <Text style={{ margin: '5%' }}> Google Mail: approxap@gmail.com </Text>
          <Text
            style={{ marginTop: '2%', marginLeft: '5%', marginBottom: '10%' }}>
            Call: +91 9891234569{' '}
          </Text>
   
        </ScrollView>
      </View>
    );
  }
}
