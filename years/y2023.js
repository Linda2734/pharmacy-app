import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Header} from 'react-native-elements'
import DropDownPicker from "react-native-dropdown-picker";
import { initializeApp } from 'firebase/app';
// import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
// import { getDoc, collection } from 'firebase/firestore';
import { db } from '../components/config'
import { collection, getDocs } from "firebase/firestore";


export default class Y2023 extends Component {
  constructor(props) {

    super(props);
    this.state = {
    dropdownHeight: 40,
    stories: [],
    
   
    }
    
  }
  
//   componentDidMount = async (activeI,expMonth,expYear,brand,productId,qua) => {
//   //   const productCollection =  firestore().collection('products');
//   //   const productDocument = firestore().collection('products').doc('nwxSOnkYP5v1zw908v8F');
//   //  alert('success')
//   //  const docSnap = getDoc(user);

//   //  if (docSnap.exists()) {
//   //   console.log('Document data:', docSnap.data());
//   //   }

//   // const getItemsFromFirebase = [];
//   // const subscriber = db
//   // .collection('Products')
//   // .onSnapshot((querySnapshot) => {
//   //   querySnapshot.forEach(() => {
//   //     getItemsFromFirebase.push({
//   //       ...doc.data(),
//   //       key:doc.id
//   //     });
//   //       setposts(getItemsFromFirebase);
//   //       setloading(false);
//   //   })
//   // })

//  this.getProduct()

  
//   }

//   getProduct = async (setTodos, todos) => {
//     // try {
//     //     await getDoc(collection(db, 'products') ,{
            
//     //     })
//     //     alert('Success')
//     // } catch (err) {
//     //     alert(err)
//     // }
    
       
//       await getDocs(collection(db, "products"))
//           .then((querySnapshot)=>{               
//               const newData = querySnapshot.docs
//                   .map((doc) => ({...doc.data(), id:doc.id }));
//               setTodos(newData);                
//               console.log(todos, newData);
//           })
     
  
//   }
    


  render() {
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
    <Text style={styles.text}>Testing</Text>
          
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
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
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

