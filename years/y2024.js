import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Header} from 'react-native-elements'
import DropDownPicker from "react-native-dropdown-picker";

import { db } from '../components/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


export default class Y2024 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dropdownHeight: 40
    }
    
  }

   fetchPost = async () => {          
    await getDocs(collection(db, "products"))
      .then((querySnapshot)=>{              
        const newData = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }));                
      
      console.log(newData)
        
    })  
  }
  
  

  render() {
    const test = "test"
    
    return (
     <View style={styles.header}>
       <Header
          style={styles.header}
          backgroundColor={'#89CFF0'}
          centerComponent={{
            text: 'Pharmacy App',
            style: { color: '#fff', fontSize: 20 },
          }}
          />
    <TouchableOpacity
      onPress={() => this.fetchPost}
    >
      <Text>Press me</Text>
    </TouchableOpacity>
          
    <DropDownPicker
                items={[
                  { label: "January", value: "jan" },
                  { label: "Febuary", value: "feb" },
                  
                ]}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "black",
                }}
               
              />
          
          
      </View>

      
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "black",
    fontSize: 30
    
  },

    imageIcon: {
    width: 150,
    height: 150,
    marginLeft:95,
  },

  header:{
    marginBottom:100,

  },
  button: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white"
  },

  button2: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white",
    marginTop:20
  },
  
});


// import React, { useState, useCallback } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";



// const DropDown = () => {
//     const [genderOpen, setGenderOpen] = useState(false);
//       const [genderValue, setGenderValue] = useState(null);
//       const [gender, setGender] = useState([
//         { label: "January", value: "jan" },
//         { label: "Febuary", value: "feb" },
//         { label: "March", value: "mar" },
//         { label: "April", value: "apr" },
//         { label: "May", value: "may" },
//         { label: "June", value: "jun" },
//         { label: "July", value: "jul" },
//         { label: "August", value: "aug" },
//         { label: "September", value: "sep" },
//         { label: "October", value: "oct" },
//         { label: "November", value: "nov" },
//         { label: "December", value: "dec" },
    
//       ]);

//       return (
//         <View style={styles.dropdownGender}>
//         <View style={styles.container}>
//         <View style={styles.lowerContainer}>
//           <View style={{ marginTop: 25 }}>
//       <DropDownPicker
//       style={styles.textinput}
//       open={genderOpen}
//       value={genderValue} //genderValue
//       items={gender}
//       setOpen={setGenderOpen}
//       setValue={setGenderValue}
//       setItems={setGender}
//       placeholder="Select Month"
      
//     />

//   <TouchableOpacity style={styles.scanbutton}>
//     <Text>Go</Text>
//   </TouchableOpacity>
//   </View>
//   </View>
//   </View>
//     </View>
//       )
//     }
//     const styles = StyleSheet.create({
//         header:{
//           marginBottom:100,
//         },
//           scanbutton: {
//           width: 100,
//           height: 50,
//           backgroundColor: '#9DFD24',
//           borderTopRightRadius: 10,
//           borderBottomRightRadius: 10,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },
//         dropdownGender: {
//           marginHorizontal: 10,
//           width: "50%",
//           marginBottom: 15,
//         },
//         dropdown: {
//           borderColor: "#B7B7B7",
//           height: 50,
//         },
//         textinput: {
//           width: "57%",
//           height: 50,
//           padding: 10,
//           borderColor: "#FFFFFF",
//           borderRadius: 10,
//           borderWidth: 3,
//           fontSize: 18,
//           backgroundColor: "#Fbd3fb",
//           fontFamily: "Rajdhani_600SemiBold",
//           color: "#FFFFFF"
//         },
//         scanbutton: {
//           width: 100,
//           height: 50,
//           backgroundColor: "#89CFF0",
//           borderTopRightRadius: 10,
//           borderBottomRightRadius: 10,
//           borderTopLeftRadius: 10,
//           borderBottomLeftRadius: 10,
//           justifyContent: "center",
//           alignItems: "center"
//         },
        
      
//       });
  
//       export default DropDown;

