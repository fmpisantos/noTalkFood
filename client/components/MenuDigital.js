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

export default function MenuDigital(props) {
  const obj = props.route?.params;
  const [state, setState] = useState({
    numPessoas: 1,
    data: new Date(),
    time: new Date(),
    nomeReserva: '',
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#dddddd' }}>
        {obj.menu.map((topico, key) => {
          return (
            <View
              key={key}
              style={{ backgroundColor: '#f2f2f2', paddingTop: 10, margin: 5 }}>
              <Text style={props.styles.text20}>{topico.tipo}</Text>
              {topico.items.map((item, key2) => {
                return (
                  <TouchableOpacity
                    key={key2}
                    style={{
                      marginTop: '2%',
                      backgroundColor: '#ffffff',
                      padding: 10,
                    }}
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
                      <View
                        style={[
                          props.styles.width65,
                          { justifyContent: 'center' },
                        ]}>
                        <Text style={props.styles.text20}>{item.nome}</Text>
                        <View style={props.styles.spacing5} />
                        <Text>{item.descricao}</Text>
                      </View>
                      <View
                        style={[
                          props.styles.width10,
                          { justifyContent: 'center' },
                        ]}>
                        <Text>{item.preco}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={[
          props.styles.row,
          props.styles.center,
          { position: 'absolute', bottom: '5%' },
        ]}>
        <TouchableOpacity
          style={props.styles.botButtonSelected}
          onPress={() => alert('Mostrar conta atual')}>
          <Text style={props.styles.botButtonTextSelected}>
            {props.lang.conta}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={props.styles.botButtonSelected}
          onPress={() => alert('Mostrar pedido atual')}>
          <Text style={props.styles.botButtonTextSelected}>
            {props.lang.pedir}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
