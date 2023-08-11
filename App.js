import { StatusBar } from "expo-status-bar"
import { StyleSheet, Image, Text, View } from "react-native"

export default function App() {
  const sampleText =
    "仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト"
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: "https://picsum.photos/id/10/300/300" }} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text} numberOfLines={3}>
            {sampleText}
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
})
