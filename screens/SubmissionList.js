import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import db from '../config';
import firebase from "firebase";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class SubmissionList extends React.Component {
  constructor() {
    super();
    this.state = {
      request: [],
    };
  }
  getData = async () => {
    this.setState({ request: [] });
    var response = await db.collection('request').get();
    //  console.log(response.docs);
    //Map function - arrays
    response.docs.map((d) => {
      //  console.log(d.data())
      var tempArr = this.state.request;
      var data = d.data();
      data.id = d.id;
      tempArr.push(data);
      this.setState({ request: tempArr });
    });
  };
  componentDidMount() {


    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getData();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    if (this.state.request.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 20,
            borderWidth: 10,
            borderColor: '#ffc533',
          }}>
          <Text>All Details will appear here!</Text>
        </View>
      );
    } else {
      console.log(this.state.request);
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
            {this.state.request.map((a) => {
              return (
                <View
                  style={{
                    backgroundColor: '#8cc640',
                    marginTop: 10,
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    padding: 10,
                    shadowRadius: 20,
                    shadowColor: 'gray',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#ffc533',
                      }}>
                      {a.name}
                    </Text>

                    <Text
                      style={{
                        backgroundColor: 'white',
                        padding: 5,
                        borderRadius: 5,
                      }}>
                      {a.pickupdate}
                    </Text>
                  </View>

                  <Text style={{ color: 'white' }}>By: {a.email}</Text>
                 
                    <Text
                      style={{ color: 'white', fontSize: 14, marginTop: 10 }}
                      numberOfLines={2}>
                      {a.pickuparea}
                    </Text>
                   
                 
                   <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                  <Text
                    style={{ color: 'white', fontSize: 14, marginTop: 10 }}
                    numberOfLines={2}>
                    {a.scrapdetails}
                  </Text>
                  <Image
                      source={require('../assets/icon2.jpg')}
                      style={{ width: 40, height: 40, marginLeft: 50,borderRadius:10 }}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity 
            style={{
              backgroundColor: '#8cc640',
              width: '20%',
              height: 40,
              marginVertical: 10,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}cd 
            onPress={() => {
              this.props.navigation.navigate("Form", {
                id: a.id,
              });
            }}>
            <Text style={{ fontSize: 24, color: 'white' }}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
