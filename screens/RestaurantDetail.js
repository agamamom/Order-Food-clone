import { View, Text } from 'react-native';
import React from 'react';
import About from './About';
import { Divider } from 'react-native-elements/dist/divider/Divider';

export default function RestaurantDetail() {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
        </View>
    );
}
