
import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Principal from './components/Principal';
import Detalles from './components/Detalles';
import Home from './components/Home';


/*function Logo(){
  return(
    <Image
        style={{width:50,height:50}}
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
    />

  )
}*/
const Drawer=createDrawerNavigator();
function MyDrawer(){
return(
 <Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name='Home' component={Home}/>
    <Drawer.Screen name='Detalles' component={Detalles}/>
 </Drawer.Navigator>
);
}

//const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer/> 
    </NavigationContainer>
  );
}


