import React from 'react';
import { ScrollView, View, Text } from "react-native";

import compteStyle from "../styles/compteStyle"; 
import repareStyle from "../styles/repareStyle"; 
import Style from '../Style';

const Reparer = () => {
    return (
        <ScrollView style={compteStyle.container}>
            <Header />
            <View>
                <Text style={repareStyle.progressText}>1/2 Votre Réparation</Text>
                <View style={repareStyle.progressBar}>
                    <View style={repareStyle.progress}></View>
                </View>

                <Text style={Style.m_T20}>Faites votre devis en 5 min top chrono.</Text>
                <Text style={Style.m_T20}>Choisissez votre artisan</Text>
            </View>
        </ScrollView>
    );
}

export default Reparer;
