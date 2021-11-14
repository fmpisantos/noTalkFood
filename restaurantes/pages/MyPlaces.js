import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import TopButtons from '../components/TopButtons';
import BigButton from '../components/BigButton';
import { TextInput } from 'react-native-paper';
import TextInputs from '../components/Textinputs';
import { AntDesign } from '@expo/vector-icons';
import RestaurantePaper from '../components/RestaurantePaper';

const width = Dimensions.get('screen').width * 0.16;
const height = Dimensions.get('screen').height * 0.16;

export default function Home(props) {
  const [places, setPlaces] = useState([
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: [38.642219229289815, -9.199787495510746],
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
    },
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: [38.642219229289815, -9.199787495510746],
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
    },
    {
      image: '../assets/Image restaurante.png',
      name: 'Restaurante example',
      local: 'Local Exemplo',
      location: [38.642219229289815, -9.199787495510746],
      timeToGetThere: [20, 25],
      rating: 4.8,
      maxPeoplePerTable: 20,
    },
  ]);
  return (
    <View style={props.styles.container}>
      <View style={props.styles.topButtonContainer}>
        <View style={props.styles.row}>
          <View style={props.styles.width10} />
          <View style={props.styles.width80}>
            <View style={props.styles.center}>
              <Text>{props.lang.myplaces}</Text>
            </View>
          </View>
          <View style={props.styles.width10}>
            <TouchableOpacity
              style={(props.styles.centerButton, { marginTop: -5 })}
              onPress={() => {
                alert('addNewPlace');
              }}>
              <AntDesign name="plussquareo" size={24} color="black" />
            </TouchableOpacity>
            <View style={props.styles.spacing2} />
          </View>
          <View style={props.styles.spacing2} />
        </View>
      </View>
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
