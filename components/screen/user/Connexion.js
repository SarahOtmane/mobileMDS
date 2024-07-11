import React, { useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import HeaderScreen from '../HeaderScreen';

export default Connexion = ({ navigation }) => {
    const [donnee, setDonnee] = useState({
        email: '',
        password: '',
        errors: false
    });

    return (
        <ScrollView>
            <HeaderScreen titre='Se connecter' navigation={navigation} />

            <View>
                <Input 
                    label='Email'
                    placeholder='votre e-mail'
                    command={donnee} 
                    setCommand={setDonnee} 
                    recherche={false} 
                    error={donnee.errors}
                />
                <Input 
                    label='Mot de passe'
                    placeholder='votre mot de passe'
                    command={donnee} 
                    setCommand={setDonnee} 
                    recherche={false} 
                    error={donnee.errors}
                />
                <Text>Mot de passe oublié ?</Text>
            </View>
        </ScrollView>
    );
}
