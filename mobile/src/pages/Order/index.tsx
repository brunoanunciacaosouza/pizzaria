import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";

type RouteDetailParams = {
  Order: {
    number: string | number;
    name?: string;
    order_id: string;
  };
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();

  async function handleCloseOder() {
    try {
      await api.delete("/order", {
        params: {
          order_id: route.params?.order_id,
        },
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Mesa: {route?.params?.number} - {route?.params.name}
        </Text>
        <TouchableOpacity onPress={handleCloseOder}>
          <Feather name="trash-2" size={36} color="#ff3f4b" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.inputText}>Pizzas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.inputText}>Pizza de calabresa</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, { width: "60%", textAlign: "center" }]}
          placeholder="1"
          placeholderTextColor="#fff"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingVertical: "5%",
    paddingEnd: "8%",
    paddingStart: "8%",
  },
  header: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    marginTop: 24,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 14,
  },
  input: {
    backgroundColor: "#101026",
    borderRadius: 4,
    width: "100%",
    height: 50,
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 8,
    color: "#fff",
    fontSize: 22,
  },
  inputText: {
    fontSize: 18,
    color: "#fff",
  },
  qtdContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtdText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonAdd: {
    backgroundColor: "#3fd1ff",
    borderRadius: 4,
    width: "20%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#101026",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3fffa3",
    width: "75%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
