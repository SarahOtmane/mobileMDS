import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Accueil from './components/Accueil';
import Compte from './components/Compte';
import Reparer from './components/Reparer';

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) =>{
                        let iconName;

                        if(route.name === 'Accueil'){
                            iconName = focused ? 'home-outline' : 'home-outline';
                        }else if(route.name === 'Reparer'){
                            iconName = focused ? 'repeat' : 'repeat-outline';
                        }else if(route.name === 'Compte'){
                            iconName = focused ? 'person-outline' : 'person-outline';
                        }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor : '#000000',
                        tabBarInactiveTintColor: '#999999'
                })}
            >
                <Tab.Screen 
                    name="Accueil" 
                    component={Accueil}
                    options={{ headerShown: false }}
                /> 
                <Tab.Screen 
                    name="Reparer" 
                    component={Reparer}
                    options={{ headerShown: false }}
                />
                <Tab.Screen 
                    name="Compte" 
                    component={Compte}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}