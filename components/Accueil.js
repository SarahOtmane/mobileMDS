import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import accueilStyle from '../styles/accueilStyle';
import Style from '../Style';

import Etape from './sections/Etape';
import Header from './sections/Header';
import Button from './sections/Button';

const Accueil = () => {
    return (
        <ScrollView>
            <View style={[accueilStyle.reparation, Style.m_B20]}>
                <Header />

                <Text style={[Style.h1, Style.m_B20]}>
                    Faites des affaires avec vos affaires
                </Text>
                <Text style={[Style.h3, Style.m_B20]}>
                    Réparez vos vêtements pour leur offrir une seconde vie
                </Text>

                <Etape />
            </View>

            <View style={[accueilStyle.tuto]} >
                <Text style={[Style.h6, Style.m_B20]}>
                    Comment réparer avec RenoWear ?
                </Text>
                <Text style={[Style.h6]}>
                    Pas besoin de nous suivre à l'autre bout du monde. Il vous suffit de suivre ce tuto . 
                </Text>

                <Button text="Obtenir un devis" arrow={true} bottom={false} />
            </View>
        </ScrollView>
    );
}

export default Accueil;
