import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { singOut } = useContext(AuthContext);
  return (
    <View>
      <Text>Pagina Dashboard</Text>
      <Button title="Sair" onPress={singOut} />
    </View>
  );
}
