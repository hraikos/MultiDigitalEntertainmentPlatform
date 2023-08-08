import React, {useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button} from 'react-native';
import axios from 'axios';

function Signup({navigation}) {
    const [values, setValues] = useState({
      email: '',
      username: '',
      password: ''
    })
  
    const signup = async (e) => {
      e.preventDefault();
      if(values.username == '')
      {
        alert("not valid")
      } else if(values.password == '')
      {
        alert("not valid")
      }else if(values.email == '')
      {
        alert("not valid")
      }else
      {
        axios.post('http://10.200.1.100:1027/signup', values)
        alert('created account')
      }
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

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  export default Signup;