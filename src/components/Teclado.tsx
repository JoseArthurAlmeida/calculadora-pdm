import React from "react";
import { StyleSheet, View } from "react-native";
import { BUTTONS_LAYOUT } from "../constants/calculadoraLayout";
import Button from "./Botao";

interface TecladoProps {
	onKeyPress: (value: string) => void;
}

export default function Teclado({ onKeyPress }: TecladoProps) {
	return (
		<View style={styles.keypadContainer}>
			{BUTTONS_LAYOUT.map((row, rowIndex) => (
				<View key={rowIndex} style={styles.row}>
					{row.map((btn, btnIndex) => (
						<Button key={`${btn}-${btnIndex}`} label={btn} onPress={onKeyPress} />
					))}
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	keypadContainer: {
		paddingBottom: 20,
		paddingHorizontal: 10,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
});
