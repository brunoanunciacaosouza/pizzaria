import { ActivityIndicator, StyleSheet, View } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={60} color="#fff" />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    justifyContent: "center",
    alignItems: "center",
  },
});
