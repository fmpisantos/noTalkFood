import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import TopBar from '@components/TopBar';
import EditRestaurante from '@components/EditRestaurante';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home(props) {
	const [ place, setPlace ] = useState(props.route.params);
	return (
		<View style={props.styles.container}>
			<TopBar 
				{...props} 
				left={
					<TouchableOpacity
						onPress={() => {
							props.navigation.goBack();
						}}
					>
						<Ionicons name="arrow-back-outline" size={24} color="black" />
					</TouchableOpacity>
				} 
				center={
					<Text>{place.name}</Text>
				} 
				right={
					<TouchableOpacity
						style={(props.styles.centerButton, { marginTop: -5 })}
						onPress={() => {
							alert('save');
						}}
					>
						<Feather name="save" size={24} color="black" />
					</TouchableOpacity>
				}
			/>
			<View style={props.styles.spacing05} />
			<EditRestaurante {...props} place={place} setPlace={setPlace}/>
		</View>
	);
}
