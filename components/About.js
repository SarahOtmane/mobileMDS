import { Text, View,  } from 'react-native';

import style from '../style.js';

const About = ({route}) =>{
    const message = route.params;

    return(
        <View style={style.container}>
            <Text style={style.title}>Page About</Text>
            <Text>{message.message}</Text>
        </View>
    )
}

export default About;