import React from 'react';
import { View, Image, Text } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import accueilStyle from '../styles/accueilStyle';
import Etape from './sections/Etape';
import Header from './sections/Header';

const Accueil = () => {
    return (
        <View style={accueilStyle.container}>
            <View style={accueilStyle.reparation}>
                <Header />
                
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
