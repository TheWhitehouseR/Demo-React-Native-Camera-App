import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Camera from '../Components/camera';

const DetailsScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Camera />
        </View>
    );
}

export default DetailsScreen