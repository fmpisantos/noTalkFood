import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function IconCarrocel(props) {
  return (
    <View style={{ flexDirection: 'row', marginTop: "5%" }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
        <Image
          style={props.styles.sliderIcon}
          source={require('../assets/icons/pizza.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={props.styles.sliderIcon}
          source={require('../assets/icons/hamburguer.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={props.styles.sliderIcon}
          source={require('../assets/icons/sushi.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={props.styles.sliderIcon}
          source={require('../assets/icons/portuguese.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={props.styles.sliderIcon}
          source={require('../assets/icons/ramen.png')}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
