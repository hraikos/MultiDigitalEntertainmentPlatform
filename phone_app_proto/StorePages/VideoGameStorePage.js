import React, {useEffect, useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';
import axios from 'axios';

 export default function VideoGamestorepage({navigation}) {
    
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://10.200.1.100:1027/getVideoGame")
        .then(data => setdata(data.data));
    },[])

    return(
        <View>
            {data.map(item => (
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('ProductView', {name: item.name, description: item.description, price: item.price})}>
                <Text>Name: {item.name}</Text>
                <Text>Price: ${item.price}</Text>
            </TouchableOpacity>
            </View>
            ))}
        </View>
    );
}