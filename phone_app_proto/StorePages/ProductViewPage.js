import React, {useEffect, useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function ProductView({route}) {
    const {name, description, price} = route.params;

    return(
        <View>
                <View>
                    <Text>Name: {name}</Text>
                    <Text>Description: {description}</Text>
                    <Text>Price: {price}</Text>
                    <Button title='add to cart'/>
                </View>
        </View>
    )
}