import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
  deleteItem: (item_id: string) => void;
}

export default function ListItem({ data, deleteItem }: ItemProps) {
  function handleDeleteItem() {
    deleteItem(data.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        Qtde: {data.amount}x - {data.name}
      </Text>
      <TouchableOpacity>
        <Feather
          name="trash-2"
          size={36}
          color="#ff3f4b"
          onPress={() => handleDeleteItem()}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101026",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: "#8a8a8a",
  },
  item: {
    color: "#fff",
  },
});
