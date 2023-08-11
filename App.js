import { StatusBar } from "expo-status-bar"
import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import { ListItem } from "./components/ListItems"
import articles from "./dummies/articles"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {articles.map((article, index) => {
          return (
            <ListItem
              imageUrl={article.urlToImage}
              title={article.title}
              author={article.author}
              key={index.toString()}
            />
          )
        })}
      </ScrollView>
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
