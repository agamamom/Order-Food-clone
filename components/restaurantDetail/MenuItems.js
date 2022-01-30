import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and saice",
        image: "https://cdn.tasteatlas.com/images/dishes/0219941488a24db3a929bd02d6ae8236.jpg",
        price: "$13.50",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and saice",
        image: "https://cdn.tasteatlas.com/images/dishes/0219941488a24db3a929bd02d6ae8236.jpg",
        price: "$13.50",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and saice",
        image: "https://cdn.tasteatlas.com/images/dishes/0219941488a24db3a929bd02d6ae8236.jpg",
        price: "$13.50",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and saice",
        image: "https://cdn.tasteatlas.com/images/dishes/0219941488a24db3a929bd02d6ae8236.jpg",
        price: "$13.50",
    },
];



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontWeight: "600",
        fontSize: 19,
    },
});

export default function MenuItems({ restaurantName }) {
    const dispatch = useDispatch();

    const selectItem = (item) => dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurantName: restaurantName },
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                            fillColor="green"
                            onPress={() => selectItem(food)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                // marginLeft: marginLeft,
            }}
        />
    </View>
);


