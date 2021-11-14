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
import { Ionicons } from '@expo/vector-icons';
import SimplePicker from 'react-native-simple-picker';

export default function MyPicker(props) {
  const [ref, setRef] = useState(null);
  const [ref2, setRef2] = useState(null);

  return (
    <View style={props.styles.row}>
      <View style={props.styles.width10} />
      <View style={props.styles.width80}>
        <Text>{props.label}</Text>
        <View style={props.styles.spacing1} />
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgray',
            padding: 10,
            borderRadius: 10,
            fontSize: 18,
          }}
          onPress={() => ref.show()}>
          <Text>{props.val}</Text>
        </TouchableOpacity>
        <SimplePicker
          disableOverlay={false}
          ref={(ref) => setRef(ref)}
          options={props.array}
          onSubmit={(option) => props.setState(option)}
          initialOptionIndex={1}
        />
      </View>
      <View style={props.styles.width5} />
    </View>
  );
}
