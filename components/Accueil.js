import React from 'react';
import { View, Image, Text } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import accueilStyle from '../styles/accueilStyle';
import Etape from './sections/Etape';

const Accueil = () => {
    return (
        <View style={accueilStyle.container}>
            <View style={accueilStyle.header}>
                <Image source={require('../assets/logo.png')} />
                <Svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G clipPath="url(#clip0_227_25742)">
                        <Path d="M6 0H9.38321L10.5885 11.9769C10.6386 12.3071 10.8064 12.608 11.061 12.8243C11.3156 13.0406 11.6398 13.1576 11.974 13.1538H20.7021C21.0042 13.1696 21.3032 13.0861 21.5534 12.9161C21.8035 12.7461 21.9912 12.4989 22.0875 12.2123L23.9302 6.67385C23.999 6.46564 24.0173 6.24406 23.9836 6.02739C23.9498 5.81072 23.865 5.60517 23.7362 5.42769C23.6021 5.23894 23.4227 5.08681 23.2146 4.98522C23.0065 4.88362 22.7761 4.83581 22.5447 4.84615H9.8681M14.5619 7.61538V10.3846M18.7182 7.61538V10.3846M20.4666 18C20.2829 18 20.1067 17.9271 19.9768 17.7972C19.8469 17.6674 19.7739 17.4913 19.7739 17.3077C19.7739 17.1241 19.8469 16.948 19.9768 16.8182C20.1067 16.6883 20.2829 16.6154 20.4666 16.6154C20.6503 16.6154 20.8265 16.6883 20.9564 16.8182C21.0863 16.948 21.1593 17.1241 21.1593 17.3077C21.1593 17.4913 21.0863 17.6674 20.9564 17.7972C20.8265 17.9271 20.6503 18 20.4666 18ZM11.4613 18C11.2776 18 11.1014 17.9271 10.9715 17.7972C10.8416 17.6674 10.7686 17.4913 10.7686 17.3077C10.7686 17.1241 10.8416 16.948 10.9715 16.8182C11.1014 16.6883 11.2776 16.6154 11.4613 16.6154C11.6451 16.6154 11.8213 16.6883 11.9512 16.8182C12.0811 16.948 12.1541 17.1241 12.1541 17.3077C12.1541 17.4913 12.0811 17.6674 11.9512 17.7972C11.8213 17.9271 11.6451 18 11.4613 18Z" stroke="#999999" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                    </G>
                    <Defs>
                        <ClipPath id="clip0_227_25742">
                            <Rect width="30" height="18" fill="white" />
                        </ClipPath>
                    </Defs>
                </Svg>
            </View>
            <View style={accueilStyle.reparation}>
                <Text style={[accueilStyle.h1, accueilStyle.m_B20]}>
                    Faites des affaires avec vos affaires
                </Text>
                <Text style={[accueilStyle.h3, accueilStyle.m_B20]}>
                    Réparez vos vêtements pour leur offrir une seconde vie
                </Text>

                <Etape />
            </View>
        </View>
    );
}

export default Accueil;
