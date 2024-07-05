import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import Result from './Result';

const Stack = createNativeStackNavigator();

const Third = () =>{
    return(
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name= "Search" component= {Search} />
            <Stack.Screen name= "Result" component= {Result} />
        </Stack.Navigator>
    )
}


export default Third;