import { View, Text,Image } from "react-native"

import accueilStyle from '../styles/accueilStyle';
import SvgUri from 'react-native-svg';

const Accueil = () =>{
    return(
        <View>
            <Text>Sarah</Text>
            <Image source={require('../assets/logo.png')} />
        </View>
    )
}

export default Accueil;