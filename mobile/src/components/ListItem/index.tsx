import { StyleSheet, Text, View } from "react-native";

interface ItemProps {
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: string | number;
    }
}

export default function ListItem({data}: ItemProps) {
  return (
    <View>
      <Text>List Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
