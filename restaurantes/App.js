import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Styles
import styles from '@styles/style';

//Pages

import Home from '@pages/Home';
import MyPlaces from '@pages/MyPlaces';
import Place from '@pages/Place';

// Langs
import lang from '@langs/ptpt.json';

// Store
import { Provider } from 'react-redux';
import store from '@store/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode, goToMenu, goToMarcarMesa, mode } from '@store/state';

const App = () => {
	const navigationRef = useNavigationContainerRef();
	const Stack = createNativeStackNavigator();
	const _mode = useSelector(mode);
	const dispatch = useDispatch();
	const _changeMode = (mode) => dispatch(changeMode(mode));
	const _goToMenu = () => dispatch(goToMenu());
	const _goToMarcarMesa = () => dispatch(goToMarcarMesa());

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

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName="myplaces"
			>
				<Stack.Screen name="home">
					{(props) => (
						<Home {...props} styles={styles} mode={_mode} changeMode={_changeMode} lang={lang} range={range} />
					)}
				</Stack.Screen>
				<Stack.Screen name="myplaces">
					{(props) => (
						<MyPlaces {...props} styles={styles} mode={_mode} changeMode={_changeMode} lang={lang} range={range} />
					)}
				</Stack.Screen>
				<Stack.Screen name="place">
					{(props) => (
						<Place {...props} styles={styles} mode={_mode} changeMode={_changeMode} lang={lang} range={range} />
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default function AppWrapper() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
