import { Text, SafeAreaView, StyleSheet } from "react-native"

export const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is ClipScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrondColor: "#fff",
  },
})
