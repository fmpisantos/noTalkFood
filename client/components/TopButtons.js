import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function TopButtons(props) {
  return (
    <View style={props.styles.topButtons}>
      <TouchableOpacity
        style={[props.styles.width5]}
        onPress={() => {
          if (props.restaurante) {
            props.changeRestauranteMode(false)
            props.navigation.goBack();
          }
        }}>
        {props.restaurante ? (
          <Ionicons name="arrow-back" size={24} color="black" />
        ) : (
          <></>
        )}
      </TouchableOpacity>
      <View
        style={[
          props.styles.row,
          props.styles.width80,
          { justifyContent: 'center' },
        ]}>
        <TouchableOpacity
          style={
            props.state.mode == 0
              ? props.styles.topButtonSelected
              : props.styles.topButtonNotSelected
          }
          onPress={() => props.setState({ ...props.state, mode: 0 })}>
          <Text
            style={
              props.state.mode == 0
                ? props.styles.topButtonTextSelected
                : props.styles.topButtonTextNotSelected
            }>
            {props.lang.marcarMesa}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            props.state.mode == 1
              ? props.styles.topButtonSelected
              : props.styles.topButtonNotSelected
          }
          onPress={() => props.setState({ ...props.state, mode: 1 })}>
          <Text
            style={
              props.state.mode == 1
                ? props.styles.topButtonTextSelected
                : props.styles.topButtonTextNotSelected
            }>
            {props.lang.menuDigital}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={props.styles.width5}>
        {props.restaurante ? (
          <SimpleLineIcons name="like" size={18} color="black" />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </View>
  );
}
