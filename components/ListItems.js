import { StyleSheet, Image, Text, View } from "react-native"

export const ListItem = () => {
  const sampleText =
    "仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト仮のテキスト"

  return (
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
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 5,
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
