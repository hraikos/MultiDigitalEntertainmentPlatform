import React from 'react';
import { View, Text,TextInput,StyleSheet,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/loginScreen.js';
import Signup from './Screens/signupScreen.js';
import Ebookstorepage from './StorePages/EbookStorePage.js';
import Moviestorepage from './StorePages/MovieStorePage.js'
import Musicstorepage from './StorePages/MusicStorePage.js'
import VideoGamestorepage from './StorePages/VideoGameStorePage.js'
import MainPage from './StorePages/MainStorePage.js';
import ProductForm from './customerScreens/customerProductForm.js'
import ProductView from './StorePages/ProductViewPage.js';
import Cart from './customerScreens/customerCart.js';
import Library from './customerScreens/customerLibrary.js'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Ebookstorepage' component={Ebookstorepage}/>
        <Stack.Screen name='Moviestorepage' component={Moviestorepage}/>
        <Stack.Screen name='Musicstorepage' component={Musicstorepage}/>
        <Stack.Screen name='VideoGamestorepage' component={VideoGamestorepage}/>
        <Stack.Screen name='MainPage' component={MainPage}/>
        <Stack.Screen name='ProductForm' component={ProductForm}/>
        <Stack.Screen name='ProductView' component={ProductView}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Library' component={Library}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
