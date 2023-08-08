import React, {useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button} from 'react-native';
import axios from 'axios';

 export default function ProductForm({}) {
    const [values, setValues] = useState({
        productType: '',
        name: '',
        author: '',
        genre:'',
        description:'',
        price:''
      })

      const submit = async (e) => {
        e.preventDefault();
        if(values.productType == '')
        {
            alert("not a valid productType")
        } else if(values.name == '')
        {
            alert("not a valid name")
        }else if(values.author == '')
        {
            alert("not a valid author")
        }else if(values.genre == '')
        {
            alert("not a valid genre")
        }else if(values.description == '')
        {
            alert("not a valid description")
        }else if(values.price == '')
        {
            alert("not a valid price")
        }else 
        {
          axios.post('http://10.200.1.100:1027/inquiry', values)
          alert('submitted form')
        }
      }

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Product Form</Text>
          <TextInput style={styles.input}
          onChangeText={(InputProductType) => setValues(prev => ({...prev, productType:InputProductType}))}
          placeholder="Product Type"/>
          <TextInput style={styles.input} 
          onChangeText={(InputName) => setValues(prev => ({...prev, name:InputName}))}
          placeholder="Name"/>
          <TextInput style={styles.input} 
          onChangeText={(InputAuthor) => setValues(prev => ({...prev, author:InputAuthor}))}
          placeholder="Author"/>
          <TextInput style={styles.input} 
          onChangeText={(InputGenre) => setValues(prev => ({...prev, genre:InputGenre}))}
          placeholder="Genre"/>
          <TextInput style={styles.input} 
          onChangeText={(InputDescription) => setValues(prev => ({...prev, description:InputDescription}))}
          placeholder="Description"/>
          <TextInput style={styles.input} 
          onChangeText={(InputPrice) => setValues(prev => ({...prev, price:InputPrice}))}
          placeholder="Price"/>
          <Button title='submit' onPress={submit}/>
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