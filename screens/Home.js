import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class Home extends React.Component {
  render() {
    return (
      <View style={{  flex: 1 ,backgroundColor:"white", borderRadius:20,
              borderWidth:10,
              borderColor:"#ffc533" }}>
        <ScrollView>
          
          <Image
            source={require("../assets/logoapp.png")}
            style={{
             width: "100%",
              height: 200,
              alignSelf: "center",
           borderRadius:10,borderWidth:5,
              borderColor:"#8cc640",
              
            }}
          />
          <View style={{flexDirection:"row"}}>
          
         <Text style={{ fontSize: 22, fontWeight: "bold",borderColor:"gray",width:"100%",shadowRadius:20,         shadowColor:"gray",padding:15 }}>
           <Ionicons name="ios-pricetags" size={24} color={"#8cc640"} />
            Price List
          </Text>
         </View>

<View style={{flexDirection: "row",padding:20}}>
<View>
                <View style={{ backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,margin:16,shadowRadius:10,shadowColor:"gray"}}>  
               <Image
                source={require("../assets/news-removebg-preview.png")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"25%"}}>Newspaper</Text>
          <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 17,height:17,marginLeft:"15%"}}/>
             <Text style={{fontWeight:"bold"}}>20 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>NoteBook,Magazine</Text>
             <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>RoughPaper etc.</Text>
             </View>

<View>
                <View style={{marginTop:"14%",backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8}}>  
               <Image
                source={require("../assets/cardboard.jpg")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"10%",marginTop:"12%"}}>CardBoard</Text>
             <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"5%"}}/>
             <Text style={{fontWeight:"bold"}}>13 Per Kg</Text>
             
          </View>
             <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Boxes etc..</Text>
             </View>
</View>


<View style={{flexDirection: "row",padding:20}}>
<View>
                <View style={{ backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}>  
               <Image
                source={require("../assets/copper.png")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"25%"}}>Copper</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"15%"}}/>
             <Text style={{fontWeight:"bold"}}>600 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Utensils,Wires</Text>
           
             </View>

<View>
                <View style={{marginTop:"14%",backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8}}>  
               <Image
                source={require("../assets/glasses-removebg-preview.png")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"20%",marginTop:"12%"}}>Glass</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"15%"}}/>
             <Text style={{fontWeight:"bold"}}>2 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Glass items..</Text>
        
             </View>
</View>

<View style={{flexDirection: "row",padding:20}}>
<View>
                <View style={{ backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}>  
               <Image
                source={require("../assets/iron.jpg")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"25%"}}>Iron</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"15%"}}/>
             <Text style={{fontWeight:"bold"}}>24 Per Kg</Text>
             
          </View>
     
             <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Tools,Taps etc.</Text>
             </View>

<View>
                <View style={{marginTop:"14%",backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8}}
>  
               <Image
                source={require("../assets/alluminium.jpg")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"10%",marginTop:"12%"}}>Aluminium</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17}}/>
             <Text style={{fontWeight:"bold"}}>130 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Slidings,</Text>
             <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Utensils etc.</Text>
             </View>

             
</View>
<View style={{flexDirection: "row",padding:20}}>
<View>
                <View style={{ backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,margin:16,shadowRadius:10,shadowColor:"gray"}}
               >  
               <Image
                source={require("../assets/plastic.jpg")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"25%"}}>Plastic</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"15%"}}/>
             <Text style={{fontWeight:"bold"}}>14 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Toy,cans</Text>
             <Text style={{color:"gray",fontSize:10,marginLeft:"20%"}}>Bottles etc.</Text>
             </View>

<View>
                <View style={{marginTop:"14%",backgroundColor: "#8cc640",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8}}
               >  
               <Image
                source={require("../assets/Steal.jpg")}
            style={{  width: "90%",height: "90%",justifyContent:"center",alignSelf:"center",margin:"10%"}}
              />    
            </View>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"10%",marginTop:"12%"}}>Steal</Text>
              <View style={{flexDirection: "row"}}>   
        <Image source={require("../assets/R.png")}  style={{width: 15,height:17,marginLeft:"5%"}}/>
             <Text style={{fontWeight:"bold"}}>55 Per Kg</Text>
             
          </View>
              <Text style={{color:"gray",fontSize:10,marginLeft:"10%"}}>Utensils,Rod</Text>

             </View>
</View>

        </ScrollView>
      </View>
    );
  }
}