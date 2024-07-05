import React from 'react';
import { ScrollView, View, Text } from "react-native";

import compteStyle from "../styles/compteStyle"; 
import repareStyle from "../styles/repareStyle"; 

const Reparer = () => {
    return (
        <ScrollView style={compteStyle.container}>
            <Header />
            <View>
                <Text style={repareStyle.progressText}>1/2 Votre Réparation</Text>
                <View style={repareStyle.progressBar}>
                    <View style={repareStyle.progress}></View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Reparer;
