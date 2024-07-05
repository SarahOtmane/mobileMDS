import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './components/Home.js';
import About from './components/About.js';
import Third from './components/Third.js';

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) =>{
                        let iconName;

                        if(route.name === 'Home'){
                            iconName = focused ? 'home' : 'home-outline';
                        }else if(route.name === 'About'){
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        }else if(route.name === 'Third'){
                            iconName = focused ? 'search' : 'search-outline';
                        }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor : '#ba0d7b',
                        tabBarInactiveTintColor: '#333333'
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title:"Home", 
                        headerStyle: {
                            backgroundColor: '#6d75b5'
                        }
                    }} 
                /> 
                <Tab.Screen 
                    name="About" 
                    component={About}  
                    initialParams={{message: "Allons-y"}}
                    options={{
                        title:"About", 
                        headerStyle: {
                            backgroundColor: '#8c6db5'
                        }
                    }} 
                />
                <Tab.Screen 
                    name="Third" 
                    component={Third}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}