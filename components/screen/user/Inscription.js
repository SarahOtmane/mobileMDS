import React, { useState } from 'react';
import { Text, Image, ScrollView, View} from 'react-native';
import HeaderScreen from '../HeaderScreen';

import compteStyle from '../../../styles/compteStyle';
import Button from '../../sections/Button';
import Style from '../../../Style';

export default Inscription = ({ navigation }) => {
    const [donnee, setDonnee] = useState({
        email: '',
        password: '',
        errors: false
    });

    return (
        <ScrollView>
            <HeaderScreen titre='Créer un compte' navigation={navigation} />

            <View style={[compteStyle.seConnecter]}>
                <Input 
                    label='Nom'
                    placeholder='votre nom'
                    command={donnee} 
                    setCommand={setDonnee} 
                    recherche={false} 
                    error={donnee.errors}
                />
                <Input 
                    label='Prénom'
                    placeholder='votre prénom'
                    command={donnee} 
                    setCommand={setDonnee} 
                    recherche={false} 
                    error={donnee.errors}
                />
                <Input 
                    label='Téléphone'
                    placeholder='votre numéro de téléphone'
                    command={donnee} 
                    setCommand={setDonnee} 
                    recherche={false} 
                    error={donnee.errors}
                />
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
                <Input 
                    label='Confirmez votre mot de passe'
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
                    classStyle='sinscrirerButton'
                />
                <Text style={[Style.textCenter, Style.m_B20]} >Vous avez déjà un compte? <Text onPress={() => navigation.navigate('Connexion')}>Se connecter ?</Text></Text>
            </View>
        </ScrollView>
    );
}
