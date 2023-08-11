import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { ListItem } from "./components/ListItems"

export default function App() {
  const sampleText =
    "仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト"
  return (
    <View style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
})
