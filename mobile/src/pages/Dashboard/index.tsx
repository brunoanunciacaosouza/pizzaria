import { useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    height: 80,
    backgroundColor: "#101029",
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#101026",
    fontWeight: "bold",
  },
});
