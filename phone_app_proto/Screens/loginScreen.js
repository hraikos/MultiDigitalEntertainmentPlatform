import React, {useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button} from 'react-native';
import axios from 'axios';

function Login({ navigation }) {

    const [values, setValues] = useState({
      username: '',
      password: ''
    })
  
    const login = async (e) => {
      e.preventDefault();
      if(values.username == '')
      {
        alert("not a valid request")
      }else if(values.password == '')
      {
        alert("not a valid request")
      } else 
      {
        axios.post('http://10.200.1.100:1027/login', values)
        .then(res => {
          if(res.data === "Success") {
            navigation.navigate('Homepage')
          } else {
            alert("invalid username or password");
          }
        })
      }
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

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  export default Login;