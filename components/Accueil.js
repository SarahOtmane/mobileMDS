import React from 'react';
import { View, Image, Text } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import accueilStyle from '../styles/accueilStyle';
import Etape from './sections/Etape';
import Header from './sections/Header';
import Video from './sections/Video';

const Accueil = () => {
    return (
        <View style={accueilStyle.container}>
            <View style={[accueilStyle.reparation, accueilStyle.m_B20]}>
                <Header />

                <Text style={[accueilStyle.h1, accueilStyle.m_B20]}>
                    Faites des affaires avec vos affaires
                </Text>
                <Text style={[accueilStyle.h3, accueilStyle.m_B20]}>
                    Réparez vos vêtements pour leur offrir une seconde vie
                </Text>

                <Etape />
            </View>

            <View style={[accueilStyle.tuto]} >
                <Text style={[accueilStyle.h6, accueilStyle.m_B20]}>
                    Comment réparer avec RenoWear ?
                </Text>
                <Text style={[accueilStyle.h6]}>
                    Pas besoin de nous suivre à l'autre bout du monde. Il vous suffit de suivre ce tuto . 
                </Text>

            </View>
        </View>
    );
}

export default Accueil;
