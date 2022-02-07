
import React from 'react'; 

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { PokemonDTO } from '../services/api';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Profile: { pokemonInfo: PokemonDTO};
  Home: undefined;
}

const stackRoutes = createStackNavigator<RootStackParamList>(); 

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator>
        <stackRoutes.Screen
            options={{
              headerShown:false
            }}
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            options={{
              headerShown:false
            }}
            name="Profile"
            component={Profile}
        />

      
    </stackRoutes.Navigator>
); 


export default AppRoutes;