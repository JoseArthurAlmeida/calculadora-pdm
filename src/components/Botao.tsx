import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

// Pegamos a largura da tela para calcular o tamanho perfeito dos botões
const { width } = Dimensions.get("window");
// 4 colunas, dividimos por 4 e subtraímos as margens para caber na tela
const buttonSize = width / 4 - 20;

interface BotaoProps {
	label: string;
	onPress: (label: string) => void;
}

export default function Botao({ label, onPress }: BotaoProps) {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress(label)} activeOpacity={0.7}>
			<Text style={styles.text}>{label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: buttonSize,
		height: buttonSize,
		backgroundColor: "#A9A9A9",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 24,
		margin: 8,
	},
	text: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#000000",
	},
});
