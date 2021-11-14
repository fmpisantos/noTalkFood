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

export default function MarcarMesa(props) {
  const obj = props.route?.params;
  const [state, setState] = useState({
    numPessoas: 1,
    data: new Date(),
    time: new Date(),
    nomeReserva: '',
  });
  return (
    <>
      <MyInput
        styles={props.styles}
        label={props.lang.nomeReserva}
        val={state.nomeReserva}
        textChange={(t) => setState({ ...state, nomeReserva: t })}
      />
      <View style={props.styles.spacing2} />
      <MyPicker
        _ref="picker"
        styles={props.styles}
        array={obj.numPessoasArray}
        val={state.numPessoas}
        setState={(item) => {
          setState({ ...state, numPessoas: item });
        }}
        label={props.lang.numPessoas}
      />
      <View style={props.styles.spacing2} />
      <MyDatePicker
        date={state.data}
        mode="date"
        label={props.lang.data}
        styles={props.styles}
        setDate={(date) => {
          setState({ ...state, data: date });
        }}
        fromDateToString={(date) => {
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
          }-${date.getFullYear()}`;
        }}
      />
      <View style={props.styles.spacing2} />
      <MyDatePicker
        date={state.time}
        mode="time"
        label={props.lang.time}
        styles={props.styles}
        setDate={(date) => {
          setState({ ...state, time: date });
        }}
        fromDateToString={(d) => {
          return `${d.getHours()}:${d.getMinutes()}`;
        }}
      />
      <View style={props.styles.spacing2} />
      <TouchableOpacity
        style={props.styles.botButtonSelected}
        onPress={() => alert('Reserva feita')}>
        <Text style={props.styles.topButtonTextSelected}>
          {props.lang.marcarMesa}
        </Text>
      </TouchableOpacity>
    </>
  );
}
