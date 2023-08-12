import { Text, SafeAreaView, StyleSheet } from "react-native"

export const ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is ArticleScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrondColor: "#fff",
  },
})
