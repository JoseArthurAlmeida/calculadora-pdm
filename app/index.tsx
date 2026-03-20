import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Visor from "../src/components/Visor";
import Teclado from "../src/components/Teclado";
import { useCalculadora } from "../src/hooks/useCalculadora";

export default function Calculator() {
	const { valorVisor, expressao, handlePress } = useCalculadora();

	return (
		<SafeAreaView style={styles.container}>
			<Visor expression={expressao} currentValue={valorVisor} />

			<Teclado onKeyPress={handlePress} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F4F4",
		justifyContent: "flex-end",
	},
});
