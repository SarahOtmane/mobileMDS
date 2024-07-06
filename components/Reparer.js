import React, { useContext, useState } from 'react';
import { ScrollView, View, Text } from "react-native";

import { CommandContext } from './CommandContexte';

import compteStyle from "../styles/compteStyle";
import repareStyle from "../styles/repareStyle";
import Style from '../Style';
import Input from './sections/Input';
import Button from './sections/Button';

const Reparer = ({route}) => {
    const { command, setCommand } = useContext(CommandContext);
    const [form, setAddress] = useState({
        address : false
    });
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

                {!form.address &&
                    <Input label = 'Specialité' placeholder='Specialité'
                     command={command} setCommand={setCommand} recherche='true' />
                }

                <Button text='Suivant' arrow={false} bottom={true} />
            </View>
        </ScrollView>
    );
}

export default Reparer;
