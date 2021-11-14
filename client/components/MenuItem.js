import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  Picker,
  TextInput,
} from 'react-native';
import MyPicker from '../components/Picker';
import MyInput from '../components/Input';
import MyDatePicker from '../components/DatePicker';

export default function MenuItem(props) {
  return (
    <TouchableOpacity
      style={{ marginTop: '2%', backgroundColor: '#ffffff', padding: '2%' }}
      onPress={() => {
        alert('Add item');
      }}>
      <View style={props.styles.row}>
        <View style={props.styles.width25}>
          <Image
            style={props.styles.itemImage}
            //source={require(props.image)}
            source={require('../assets/icons/hamburguer.png')}
          />
        </View>
        <View style={[props.styles.width65, { justifyContent: 'center' }]}>
          <Text style={props.styles.text20}>{props.nome}</Text>
          <View style={props.styles.spacing5} />
          <Text>{props.descricao}</Text>
        </View>
        <View style={[props.styles.width10, { justifyContent: 'center' }]}>
          <Text>{props.preco}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
