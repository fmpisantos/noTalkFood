import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Picker,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import IconScroll from '../components/IconCarrocel';
import TopButtons from '../components/TopButtons';
import MarcarMesa from '../components/MarcarMesaForm';
import MenuDigital from '../components/MenuDigital';
import RestaurantePaper from '../components/RestaurantePaper';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Restaurante(props, { route, navigation }) {
  const obj = props.route?.params;
  const img = require('../assets/restauranteImages/restaurante.png');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={props.styles.container}>
          <TopButtons
            styles={props.styles}
            state={props.state}
            setState={props.setState}
            lang={props.lang}
            restaurante={true}
            navigation={props.navigation}
            changeRestauranteMode={(flag) => {
              props.setState({ ...props.state, restaurante: flag });
            }}
          />
          <View style={props.styles.spacing2}></View>
          <View style={props.styles.center}>
            <Text style={props.styles.title}>{obj.name}</Text>
            <TouchableOpacity style={props.styles.row}>
              <Text
                style={
                  props.styles.text16
                }>{`${obj.local} (${obj.timeToGetThere[0]}-${obj.timeToGetThere[1]}) min)`}</Text>
              <MaterialCommunityIcons
                name="map-marker-multiple-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={props.styles.restauranteImage}
              //source={require(obj.image)}
              source={img}
            />
          </View>
          <View style={props.styles.spacing5} />
          {props.state.mode === 0 ? (
            <MarcarMesa {...props} />
          ) : (
            <MenuDigital {...props} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
