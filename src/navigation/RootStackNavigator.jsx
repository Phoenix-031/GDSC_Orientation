/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TeamOnboard from "../screens/TeamOnboard";

import {SCREENS} from '../utils/screens'
import StageOne from "../screens/StageOne";
import StageTwo from "../screens/StageTwo";
import StageThree from "../screens/StageThree";
import StageFour from "../screens/StageFour";
import StagFive from "../screens/StagFive";
import StageSix from "../screens/StageSix";
import HomeTabNavigator from "./TabNavigator";



const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                    headerShown: false
                }}>
                <RootStack.Screen name={SCREENS.TeamOnBoard} component={TeamOnboard} />
                <RootStack.Screen name = {SCREENS.Home} component={HomeTabNavigator} />
                <RootStack.Screen 
                options={{
                        headerShown: false,  
                    }}
                name={SCREENS.Stageone} component={StageOne} />
                <RootStack.Screen 
                options={{
                    headerShown: false,
                }}
                name={SCREENS.Stagetwo} component={StageTwo} />
                <RootStack.Screen 
                options={{
                        headerShown: false,
                    }}

                name={SCREENS.Stagethree} component={StageThree} />
                <RootStack.Screen 
                options={{
                        headerShown: false,
                    }}

                name={SCREENS.Stagefour} component = {StageFour} />
                <RootStack.Screen 
                options={{
                        headerShown: false,
                    }}

                name = {SCREENS.Stagefive} component={StagFive} />
                <RootStack.Screen 
                options={{
                        headerShown: false,
                    }}

                name = {SCREENS.Stagesix} component={StageSix} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackNavigator;