import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CommandProvider } from './components/CommandContexte'; 
import Accueil from './components/Accueil';
import Compte from './components/Compte';
import Reparer from './components/Reparer';
import Connexion from './components/screen/user/Connexion';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Reparer') {
                        iconName = focused ? 'repeat' : 'repeat-outline';
                    } else if (route.name === 'Compte') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#999999',
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
    );
}

export default function App() {
    return (
        <CommandProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </CommandProvider>
    );
}
