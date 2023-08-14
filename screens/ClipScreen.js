import { Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItems"

export const ClipScreen = ({ navigation }) => {
  const clips = useSelector((state) => state.user.clips)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            onPress={() =>
              navigation.navigate("Article", {
                article: item,
              })
            }
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
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
    backgrondColor: "#fff",
  },
})
