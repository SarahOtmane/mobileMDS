import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <SvgUri
        width="150"
        height="50"
        source={require('../assets/logo.svg')}
      />
      <SvgUri
        width="50"
        height="50"
        source={require('../assets/panier.svg')}
      />
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
