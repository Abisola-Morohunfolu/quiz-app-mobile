import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
	label: string;
	pressed: () => void;
	disabled?: boolean;
	bgColor: string;
	color: string;
	borderColor?: string;
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginBottom: 10,
		borderWidth: 1,
	},
	label: {
		fontSize: 16,
	},
});

const Button = ({ label, pressed, disabled, bgColor, color, borderColor }: Props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.container, backgroundColor: bgColor, borderColor }}
			onPress={pressed}
			disabled={disabled}
		>
			<Text style={{ ...styles.label, color: color }}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;
