import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, FlatList } from "react-native"
import { ListItem } from "./components/ListItems"
import articles from "./dummies/articles"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <ListItem imageUrl={item.urlToImage} title={item.title} author={item.author} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
})
