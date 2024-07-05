import { View, Text, Image, ScrollView } from "react-native";

import Header from "./sections/Header";

import compteStyle from "../styles/compteStyle";
import Style from '../Style';
import Button from "./sections/Button";


const Compte = () =>{
    return(
        <ScrollView style={compteStyle.container}>
            <Header />
            <Image style={compteStyle.image} source={require('../assets/compte.png')} />
            <Text style={[Style.h6, Style.m_R10, Style.m_T20]}>Identifiez vous pour suivre vos commandes, valider votre commande.</Text>

            <Button text='Se connecter' arrow='false' />
        </ScrollView>
    )
}

export default Compte;