import React, { useContext} from 'react';
import { ScrollView, View, Text } from "react-native";

import { CommandContext } from './CommandContexte';
import RepaForm from './sections/RepaForm';

import compteStyle from "../styles/compteStyle";
import repareStyle from "../styles/repareStyle";
import Style from '../Style';

const Reparer = () => {
    const { command, setCommand } = useContext(CommandContext);
    return (
        <ScrollView style={compteStyle.container}>
            <Header />
            <View>
                <Text style={repareStyle.progressText}>1/2 Votre Réparation</Text>
                <View style={repareStyle.progressBar}>
                    <View style={repareStyle.progress}></View>
                </View>

                <Text style={[Style.m_T20]}>Faites votre devis en 5 min top chrono.</Text>
                <Text style={[Style.m_T20, Style.textBold]}>Choisissez votre artisan</Text>

                <RepaForm command={command} setCommand={setCommand} />
            </View>
        </ScrollView>
    );
}

export default Reparer;
