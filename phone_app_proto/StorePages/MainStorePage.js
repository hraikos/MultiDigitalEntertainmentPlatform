import React, {useEffect, useState} from 'react';
import { View, Text, TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function MainPage({navigation}) {
     return(
        <View>
            <Button title='Ebook' onPress={() => navigation.navigate('Ebookstorepage')}/>
            <Button title='Movie' onPress={() => navigation.navigate('Moviestorepage')}/>
            <Button title='Music' onPress={() => navigation.navigate('Musicstorepage')}/>
            <Button title='VideoGame' onPress={() => navigation.navigate('VideoGamestorepage')}/>
            <Button title='ProductForm' onPress={() => navigation.navigate('ProductForm')}/>
            <Button title='Library' onPress={() => navigation.navigate('Library')}/>
            <Button title='Cart' onPress={() => navigation.navigate('Cart')}/>
        </View>
     )
}
