import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Home from './pages/Home';
import Restaurante from './pages/Restaurante';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import lang from './assets/ptpt.json';
import restList from './assets/restauranteList.json';

export default function App() {
  const range = (start, stop, step, string = false) => {
    if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
    }

    if (typeof step == 'undefined') {
      step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(string ? `${i}` : i);
    }

    return result;
  };

  const [state, setState] = useState({
    mode: 0, // 0 = marcar mesa, 1 = menu digital
    address: 'Rua João Tavares Lote 5',
    restaurantList: restList,
  });

  const navigationRef = React.createRef();

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode={null} initialRouteName="home">
        <Stack.Screen name="home">
          {(props) => (
            <Home
              {...props}
              styles={styles}
              state={state}
              setState={setState}
              lang={lang}
              range={range}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="restaurante">
          {(props) => (
            <Restaurante
              {...props}
              styles={styles}
              state={state}
              setState={setState}
              lang={lang}
              range={range}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#ffffff',
  },
  topButtons: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topButtonSelected: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    marginHorizontal: '2%',
    borderRadius: 20,
  },
  topButtonTextSelected: {
    color: 'white',
  },
  botButtonSelected: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    paddingVertical: '4%',
    paddingHorizontal: '8%',
    marginHorizontal: '15%',
    borderRadius: 20,
  },
  botButtonTextSelected: {
    color: 'white',
    fontSize: 18,
  },
  topButtonNotSelected: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    marginHorizontal: '2%',
    borderRadius: 20,
  },
  topButtonTextNotSelected: {
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing5: {
    minHeight: '5%',
  },
  spacing2: {
    minHeight: '2%',
  },
  spacing1: {
    minHeight: '1%',
  },
  spacing15: {
    minHeight: '15%',
  },
  width100: {
    width: '100%',
  },
  width90: {
    width: '90%',
  },
  width80: {
    width: '80%',
  },
  width10: {
    width: '10%',
  },
  width25: {
    width: '25%',
  },
  width30: {
    width: '30%',
  },
  width60: {
    width: '60%',
  },
  width65: {
    width: '65%',
  },
  width20: {
    width: '20%',
  },
  width85: {
    width: '85%',
  },
  width5: {
    width: '5%',
  },
  sliderIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  restauranteImage: {
    width: '95%',
    height: 150,
    resizeMode: 'center',
  },
  restauranteImageBig: {
    width: 200,
    height: 150,
    resizeMode: 'center',
  },
  itemImage: {
    width: '95%',
    height: 75,
    resizeMode: 'center',
  },
  text20: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
