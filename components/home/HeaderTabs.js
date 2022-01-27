import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTabs(props) {
    return (
        <View style={{ marginTop: 30, flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text
            style={{
                color: props.activeTab === props.text ? "white" : "black", fontWeight: "700", fontSize: 15,
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);

