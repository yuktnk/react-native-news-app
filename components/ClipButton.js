import { StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

export const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-o"

  return (
    <TouchableOpacity onPress={onPress} style={sytles.container}>
      <FontAwesome name={name} size={40} color="salmon" />
    </TouchableOpacity>
  )
}

const sytles = StyleSheet.create({
  container: {
    padding: 5,
  },
})
