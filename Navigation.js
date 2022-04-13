import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './components/CustomNavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import useStation from "./hooks/useStation";
import React, { useEffect } from 'react';
import Detail from './components/Detail';
import Home from './components/Home';


const Stack = createNativeStackNavigator();

export default function Navigation()
{
    const { Create_Table_Station, Drop_Table_Station,
        Get_Station_From_DB, Delete_All_Station } = useStation();

    // useEffect(() => Drop_Table_Station(), []);

    useEffect(() => Create_Table_Station(), []);

    useEffect(() => Get_Station_From_DB(), []);

    // useEffect(() => Delete_All_Station(), []);


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                header: CustomNavigationBar,
            }}>
                <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
                <Stack.Screen name="Detail" component={Detail} options={{ title: "Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}