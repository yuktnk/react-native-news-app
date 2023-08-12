import { SafeAreaView, StyleSheet } from "react-native"
import { WebView } from "react-native-webview"

export const ArticleScreen = ({ route }) => {
  const { article } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrondColor: "#fff",
  },
})
