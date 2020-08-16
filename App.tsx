// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';

//type for params
export type RootStackParamList = {
	Home: undefined;
	Quiz: {
		amount: string;
		difficulty: string;
		questionType: string;
	};
};

const StackNav = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
	return (
		<StackNav.Navigator initialRouteName="Home">
			<StackNav.Screen name="Home" component={HomeScreen} />
			<StackNav.Screen name="Quiz" component={QuizScreen} />
		</StackNav.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
