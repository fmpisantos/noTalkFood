import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export default function MyInput(props) {
  return (
    <View style={[props.styles.row]}>
      <View style={props.styles.width10} />
      <View style={props.styles.width80}>
        <Text>{props.label}</Text>
        <View style={props.styles.spacing1} />
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: 8,
            borderRadius: 10,
            fontSize: 18,
          }}>
          <TextInput
            style={{
              fontSize: 18,
            }}
            onFocus={() => {
              if (props.focus) props.func();
            }}
            onChangeText={props.textChange}
            value={props.val}
          />
        </View>
      </View>
      <View style={props.styles.width10} />
    </View>
  );
}
