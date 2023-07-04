import React, {useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

function Homepage ({navigation}) {
  return(
    <View>
      <Text>Homepage</Text>
    </View>
  )
}
function Login({ navigation }) {

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const login = async (e) => {
    e.preventDefault();
    axios.post('http://10.200.1.100:1027/login', values)
    .then(res => {
      if(res.data === "Success") {
        navigation.navigate('Homepage')
      } else {
        alert("no record found");
      }
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <TextInput style={styles.input}
      onChangeText={(InputUsername) => setValues(prev => ({...prev, username:InputUsername}))}
      placeholder="userName"/>
      <TextInput style={styles.input} 
      onChangeText={(InputPassword) => setValues(prev => ({...prev, password:InputPassword}))}
      placeholder="password"/>
      <Button title='login' onPress={login}/>
      <Button title='signup'
      onPress={() => navigation.navigate('Signup')}/>
    </View>
  );
}

function Signup({navigation}) {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: ''
  })

  const signup = async (e) => {
    e.preventDefault();
    axios.post('http://10.200.1.100:1027/signup', values)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup</Text>
      <TextInput style={styles.input} 
      onChangeText={InputEmail => setValues(prev => ({...prev, email:InputEmail}))}
      
      placeholder="email"/>
      <TextInput style={styles.input}
      onChangeText={InputUsername => setValues( prev => ({...prev, username:InputUsername}))}
      placeholder="userName"/>
      <TextInput style={styles.input} 
      onChangeText={(InputPassword) => setValues(prev => ({...prev, password:InputPassword}))}
      placeholder="password"/>
      <Button title='signup' onPress={signup} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Homepage" component={Homepage} />
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
