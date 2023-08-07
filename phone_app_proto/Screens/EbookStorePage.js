import React, {useEffect, useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button} from 'react-native';
import axios from 'axios';

function ebookstorepage() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1027/getEbook")
        .then(data => setdata(data.data));
    },[])

    return(
        <View>

        </View>
    );
}
