import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function TopButtons(props) {
  return (
    <View style={props.styles.topButtons}>
      <View
        style={[
          props.styles.row,
          props.styles.width80,
          { justifyContent: 'center' },
        ]}>
        {props.buttons.map((button, key) => {
          return (
            <TouchableOpacity
              style={
                props.mode == key
                  ? props.styles.topButtonSelected
                  : props.styles.topButtonNotSelected
              }
              onPress={button.func}>
              <Text
                style={
                  props.mode == key
                    ? props.styles.topButtonTextSelected
                    : props.styles.topButtonTextNotSelected
                }>
                {button.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
