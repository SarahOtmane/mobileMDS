import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default Button = ({text}) =>{
    const handleSubmit = () => {
      };

    return(
        <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#0E1422',
      borderRadius : 10,
      width : 350,
      paddingVertical : 20,
      alignItems: 'center',
      marginRight : 10,
      marginVertical: 30,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 14,
    },
});