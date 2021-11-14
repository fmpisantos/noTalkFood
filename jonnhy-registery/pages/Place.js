import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import TopButtons from '../components/TopButtons';
import BigButton from '../components/BigButton';
import { TextInput } from 'react-native-paper';
import TextInputs from '../components/Textinputs';
import { AntDesign } from '@expo/vector-icons';
import RestaurantePaper from '../components/RestaurantePaper';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('screen').width * 0.16;
const height = Dimensions.get('screen').height * 0.16;

export default function Home(props) {
  const [place, setPlace] = useState(props.route.params);
  return (
    <View style={props.styles.container}>
      <View style={props.styles.topButtonContainer}>
        <View style={props.styles.row}>
          <View style={props.styles.width10}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={props.styles.width80}>
            <View style={props.styles.center}>
              <Text>{place.name}</Text>
            </View>
          </View>
          <View style={props.styles.width10}>
            <TouchableOpacity
              style={(props.styles.centerButton, { marginTop: -5 })}
              onPress={() => {
                alert('save');
              }}>
              <Feather name="save" size={24} color="black" />
            </TouchableOpacity>
            <View style={props.styles.spacing2} />
          </View>
          <View style={props.styles.spacing2} />
        </View>
      </View>
      <View style={props.styles.spacing05} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
        style={[props.styles.container2, { backgroundColor: '#ffffff' }]}>
        <View style={props.styles.row}>
          <View style={props.styles.width10} />
          <View style={props.styles.width80}>
            <TextInputs
              inputs={[
                {
                  label: props.lang.restauranteName,
                  value: place.name,
                  func: (text) => setPlace({ ...place, name: text }),
                  password: false,
                },
                {
                  label: props.lang.location,
                  value: place.location,
                  func: (text) => setPlace({ ...place, location: text }),
                  password: false,
                },
              ]}
              {...props}
            />
          </View>
          <View style={props.styles.width10} />
        </View>
      </ScrollView>
    </View>
  );
}
