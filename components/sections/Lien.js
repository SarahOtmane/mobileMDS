import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Path, Svg, SvgXml } from 'react-native-svg';

export default Lien = ({ svg, text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={[styles.sous_container]}>
                <SvgXml xml={svg} width="16" height="17" />
                <Text style={styles.text} >{text}</Text>
            </View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fillRule="evenodd" clipRule="evenodd" d="M14.9137 11.4673C15.163 11.7443 15.1651 12.1958 14.9184 12.4757L10.0506 18L9.14809 16.9967L13.5693 11.9793L9.10205 7.01366L9.99526 6L14.9137 11.4673Z" fill="#999999"/>
            </Svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#FFDBE8',
        marginBottom: 10,
        borderWidth: 1.5,
    },
    sous_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    text: {
        marginLeft: 20
    }
});
