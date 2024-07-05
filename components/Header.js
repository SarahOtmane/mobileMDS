import React from 'react';
import { View, Image } from 'react-native';

export default Header = () =>{
    return(
        <View>
            <Image source={require('../assets/logo.svg')} />
            <Image source={require('../assets/panier.svg')} />
        </View>
    )
}