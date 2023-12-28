


import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

import y2023 from './years/y2023';
import y2024 from './years/y2024';
import y2025 from './years/y2025';
import y2026 from './years/y2026';
import y2027 from './years/y2027';
import AddItemScreen from './screens/AddItemScreen'
import AddCategoryScreen from './screens/AddCategoryScreen'
import Search from './screens/Search'
import Home from './screens/Home'
import Scan from './screens/Scan'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';





const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
}








const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Add Item" component={Scan} />
      <Drawer.Screen name="Search" component={Search} />
       <Drawer.Screen name="2023" component={y2023} />
      <Drawer.Screen name="2024" component={y2024} />
      <Drawer.Screen name="2025" component={y2025} />
       <Drawer.Screen name="2026" component={y2026} />
       <Drawer.Screen name="2027" component={y2027} />
       
    </Drawer.Navigator>

    
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Drawer.Screen name="Root" component={Root} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  header:{
    marginBottom:100,
  },
    scanbutton1: {
    width: 500,
    height: 100,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:500
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',

  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#9DFD24',
    borderColor: '#FFFFFF',
  },
  textinput: {
    width: '57%',
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#5653D4',
    
    color: '#FFFFFF',
  },
  scanbutton2: {
    width: 500,
    height: 100,
    backgroundColor: '#89CFF0',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:500,
    marginTop:50
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },

});

export default App;

