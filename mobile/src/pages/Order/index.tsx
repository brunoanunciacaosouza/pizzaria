import { StyleSheet, View, Text } from "react-native";

export default function Order() {
  return (
    <View style={styles.container}>
      <Text>Tela de order</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
