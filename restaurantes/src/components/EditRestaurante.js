import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import TextInputs from '@components/Textinputs';

export default function EditRestaurante(props) {
	return (
			<ScrollView
				contentContainerStyle={{ paddingBottom: 200 }}
				showsVerticalScrollIndicator={false}
				style={[ props.styles.container2, { backgroundColor: '#ffffff' } ]}
			>
				<View style={props.styles.row}>
					<View style={props.styles.width10} />
					<View style={props.styles.width80}>
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<Image
								style={props.styles.restauranteImage}
								source={require('../assets/restauranteImages/restaurante.jfif')}
							/>
							<TouchableOpacity onPress={() => alert('Select new image')}>
								<Text>{props.lang.changeImage}</Text>
							</TouchableOpacity>
						</View>
						<TextInputs
							inputs={[
								{
									label: props.lang.restauranteName,
									value: props.place.name,
									func: (text) => props.setPlace({ ...props.place, name: text }),
									password: false
								},
								{
									label: props.lang.typeOfFood,
									value: props.place.typeOfFood,
									func: (text) => props.setPlace({ ...props.place, typeOfFood: text }),
									password: false
								},
								{
									label: props.lang.schedule,
									value: props.place.schedule,
									func: (text) => props.setPlace({ ...props.place, schedule: text }),
									password: false
								},
								{
									label: props.lang.location,
									value: props.place.location,
									func: (text) => props.setPlace({ ...props.place, location: text }),
									password: false
								}
							]}
							{...props}
						/>
					</View>
					<View style={props.styles.width10} />
				</View>
			</ScrollView>
	);
}
