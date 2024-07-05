import React, { useState } from "react";
import { Button, TextInput, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import style from '../style.js';

const Search = () =>{
    const navigation = useNavigation();
    const [search, setSearch] = useState('');

    const submit = () =>{
        navigation.navigate('Result', { search: search });
    }

    return(
        <View style={style.container}>
            <Text>Recherche</Text>
            <TextInput style={style.input} placeholder="Search" 
                onChangeText={(text) => setSearch(text)}
            />
            <Button style={style.button} title="Rechercher"
                onPress={submit}
            />
        </View>
    )
}


export default Search;