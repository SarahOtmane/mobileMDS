import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default HeaderScreen = ({ navigation, titre }) =>{
    return(
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fillRule="evenodd" clipRule="evenodd" d="M0.710365 6.50422C0.429878 6.22575 0.429878 5.77425 0.710365 5.49578L6.24586 0L7.26159 1.00845L2.23396 6L7.26159 10.9916L6.24586 12L0.710365 6.50422Z" fill="#999999"/>
                    <Path fillRule="evenodd" clipRule="evenodd" d="M1.00276 5.28692H13.5V6.71308H1.00276V5.28692Z" fill="#999999"/>
                </Svg>
                </TouchableOpacity>
                <Text style={styles.titre} >{titre}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 50,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },

    header: {
        marginTop: 90,
        marginHorizontal: 20
    },

    titre: {
        marginLeft: 110
    }
});