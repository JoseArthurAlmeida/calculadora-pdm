import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface VisorProps {
	expression: string;
	currentValue: string;
}

export default function Visor({ expression, currentValue }: VisorProps) {
	return (
		<View style={styles.displayContainer}>
			<Text style={styles.expressionText} numberOfLines={1}>
				{expression}
			</Text>
			<Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
				{currentValue}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	displayContainer: {
		flex: 1,
		backgroundColor: "#808080",
		marginHorizontal: 16,
		marginTop: 20,
		marginBottom: 40,
		justifyContent: "space-between",
		alignItems: "flex-end",
		padding: 20,
	},
	expressionText: {
		color: "#4D4D4D",
		fontSize: 28,
		fontWeight: "500",
	},
	displayText: {
		color: "#333333",
		fontSize: 60,
		fontWeight: "bold",
	},
});
