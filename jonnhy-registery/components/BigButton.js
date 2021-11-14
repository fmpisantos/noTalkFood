import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BigButton(props) {
  return (
    <TouchableOpacity
      style={props.styles.bigButton}
      onPress={props.func}>
      <Text style={props.styles.bigButtonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
