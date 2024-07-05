import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDBE8',
    width: '100%',
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  logo: {
    margin: 10,
  },
});

export default Header;
