import React, {useState } from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login({ navigation }) {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const [userName, setUserName] = useState('')

  const [password, setpassword] = useState('')

  const login = async (e) => {
    e.preventDefault();
    setValues([userName,password])

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <TextInput style={styles.input}
      onChangeText={(InputUsername) => setUserName(InputUsername)}
      placeholder="userName"/>
      <TextInput style={styles.input} 
      onChangeText={(InputPassword) => setpassword(InputPassword)}
      placeholder="password"/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
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
