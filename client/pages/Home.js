import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import IconScroll from '../components/IconCarrocel';
import TopButtons from '../components/TopButtons';
import RestaurantePaper from '../components/RestaurantePaper';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Home(props) {
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
          />
          <View style={props.styles.spacing2}></View>
          <View
            style={[
              props.styles.row,
              props.styles.center,
              props.styles.width100,
            ]}>
            <View
              style={[
                props.styles.width90,
                props.styles.row,
                { marginLeft: '5%', justifyContent: 'center' },
              ]}>
              <TouchableOpacity style={props.styles.row}>
                <Text>{props.state.address}</Text>
                <View style={{ marginLeft: 5 }}>
                  <AntDesign name="down" size={18} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[props.styles.width5, { marginLeft: '-8%' }]}>
              <EvilIcons name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <IconScroll styles={props.styles} />
          <View style={props.styles.spacing2} />
          <ScrollView
            contentContainerStyle={{ paddingBottom: 200 }}
            style={{ flex: 1, backgroundColor: '#dddddd' }}
            showsVerticalScrollIndicator={false}>
            {props.state.restaurantList.map((restaurante, key) => {
              return (
                <RestaurantePaper
                  key={key}
                  styles={props.styles}
                  {...restaurante}
                  route={props.route}
                  navigation={props.navigation}
                  restauranteMode={(flag) => {
                    props.setState({ ...props.state, restaurante: flag });
                  }}
                  range={props.range}
                />
              );
            })}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
