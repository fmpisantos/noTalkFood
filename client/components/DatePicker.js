import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, Platform } from 'react-native';

export default function MyDatePicker(props) {
  const [show, setShow] = useState(Platform.OS === 'ios');
  const [color, setColor] = useState('#dddddd');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === 'ios');
    props.setDate(new Date());
  };

  const fromDateToString = (date) => {
    const MONTHS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${date.getDate()}-${
      MONTHS[date.getMonth()]
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };
  return (
    <View style={props.styles.row}>
      <View style={props.styles.width10} />
      <View style={props.styles.width80}>
        <Text>{props.label}</Text>
        <View style={props.styles.spacing1} />
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: Platform.OS === 'ios' ? 0 : 10,
            borderRadius: 10,
            fontSize: 18,
          }}>
          {show ? (
            <DateTimePicker
              testID={props.label}
              value={props.date}
              mode={props.mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          ) : (
            <TextInput
              style={{ 'border-width': 'thin', 'border-color': color }}
              onFocus={() => (Platform.OS !== 'web' ? setShow(true) : () => {})}
              onChangeText={(t) => {
                try {
                  let d = new Date(t);
                  props.setDate(t);
                  setColor('#dddddd');
                } catch (error) {
                  setColor('red');
                }
              }}
              value={props.fromDateToString(props.date)}
            />
          )}
        </View>
      </View>
      <View style={props.styles.width5} />
    </View>
  );
}
