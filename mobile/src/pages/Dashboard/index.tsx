import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  async function openOder() {
    if (number === "") {
      return;
    }
    console.log(number);

    const response = await api.post("/order", {
      table: Number(number),
      name: name,
    });

    navigation.navigate("Order", {
      number: number,
      name: name,
      order_id: response.data.id,
    });

    setNumber("");
    setName("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do cliente (opcional)"
        placeholderTextColor="#f0f0f0"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={openOder}>
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
    marginBottom: 12,
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
