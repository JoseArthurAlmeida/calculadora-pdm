import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function Layout() {
	return (
		<SafeAreaProvider>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" translucent={false} />
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	);
}
