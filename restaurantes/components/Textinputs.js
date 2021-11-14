import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function TextInputs(props) {
  return (
    <>
      <View style={props.styles.spacing10}></View>
      {props.inputs.map((input, key) => {
        return (
          <>
            <TextInput
              autoCapitalize={false}
              secureTextEntry={input.password}
              label={input.label}
              value={input.value}
              onChangeText={input.func}
              mode={'outlined'}
              outlineColor={'#FFDFDF'}
              underlineColor={'#FFDFDF'}
              selectionColor={'#FFDFDF'}
              style={{ height: 50 }}
            />
            <View style={props.styles.spacing5}></View>
          </>
        );
      })}
      <View style={props.styles.spacing10}></View>
    </>
  );
}
