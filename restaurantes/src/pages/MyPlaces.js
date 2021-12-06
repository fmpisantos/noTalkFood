import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RestaurantePaper from '@components/RestaurantePaper';
import TopBar from '@components/TopBar'


export default function Home(props) {
  const [places, setPlaces] = useState([
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: "Mercado da Romeira",
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
      schedule: "Mo, Tu, We, Th, Fr, Sa",
      typeOfFood: "Hamburguers, Meat, Drinks, Vegetarian, ..."
    },
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: "Mercado da Romeira",
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
      schedule: "Mo, Tu, We, Th, Fr, Sa",
      typeOfFood: "Hamburguers, Meat, Drinks, Vegetarian, ..."
    },
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: "Mercado da Romeira",
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
      schedule: "Mo, Tu, We, Th, Fr, Sa",
      typeOfFood: "Hamburguers, Meat, Drinks, Vegetarian, ..."
    },
  ]);
  return (
    <View style={props.styles.container}>
      <TopBar {...props} center={<Text>{props.lang.myplaces}</Text>} right={
            <TouchableOpacity
            style={(props.styles.centerButton, { marginTop: -5 })}
            onPress={() => {
              alert('addNewPlace');
            }}>
              <AntDesign name="plussquareo" size={24} color="black" />
            </TouchableOpacity>
       } />
      <View style={props.styles.spacing05} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
        style={(props.styles.container2, { backgroundColor: '#dddddd' })}>
        {places.map((item, key) => {
          return (
            <>
              <RestaurantePaper navigation={props.navigation} key={key} styles={props.styles} item={item} />
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
