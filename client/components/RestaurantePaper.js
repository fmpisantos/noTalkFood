import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RestaurantePaper(props) {
  return (
    <TouchableOpacity
      style={{ marginTop: '2%', backgroundColor: '#ffffff', padding: '5%' }}
      onPress={() => {
        props.restauranteMode(true);
        props.navigation.navigate('restaurante', {
          ...props,
          numPessoasArray: props.range(
            1,
            props.maxPeoplePerTable + 1,
            1,
            (string = true)
          ),
        });
      }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={props.styles.restauranteImage}
          //source={require(props.image)}
          source={require('../assets/restauranteImages/restaurante.jfif')}
        />
      </View>
      <View style={props.styles.spacing1} />
      <View style={props.styles.row}>
        <View style={props.styles.width90}>
          <Text style={props.styles.text20}>{props.name}</Text>
          <Text>{`${props.local} (${props.timeToGetThere[0]}-${props.timeToGetThere[1]}) min)`}</Text>
        </View>
        <View style={props.styles.row}>
          <Text>{props.rating}</Text>
          <Ionicons name="checkmark-done" size={18} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
