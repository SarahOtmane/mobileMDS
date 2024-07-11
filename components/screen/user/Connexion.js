import React, { useState } from 'react';
import { Text, Image, ScrollView, View} from 'react-native';
import HeaderScreen from '../HeaderScreen';

import compteStyle from '../../../styles/compteStyle';
import Button from '../../sections/Button';
import Style from '../../../Style';

export default Connexion = ({ navigation }) => {
    const [donnee, setDonnee] = useState({
        email: '',
        password: '',
        errors: false
    });

    return (
        <ScrollView>
            <HeaderScreen titre='Se connecter' navigation={navigation} />

            <View style={[compteStyle.seConnecter]}>
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
                <Text style={[Style.textCenter]} >Mot de passe oublié ?</Text>
            </View>

            <View>
                <Button 
                    text='Se connecter' 
                    arrow={true} 
                    bottom={false} 
                    onPress={() => navigation.navigate('Connexion')} 
                    classStyle='seConnecterButton'
                />
                <Text style={[Style.textCenter]} >Vous avez déjà un compte? S’inscrirer ?</Text>
            </View>
        </ScrollView>
    );
}
