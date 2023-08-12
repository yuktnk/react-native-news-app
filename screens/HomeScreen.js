import { useState, useEffect } from "react"
import axios from "axios"

import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native"
import { ListItem } from "../components/ListItems"
// import Constants from "expo-constants"

import { NEWS_API_KEY } from "@env"

// const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=9438957f120043bb9938e1869cbce2ba`
const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${NEWS_API_KEY}`

export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL)
      setArticles(res.data.articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article")}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
})
