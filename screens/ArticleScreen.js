import { useDispatch, useSelector } from "react-redux"

import { SafeAreaView, StyleSheet } from "react-native"
import { WebView } from "react-native-webview"
import { ClipButton } from "../components/ClipButton"
import { addClip, deleteClip } from "../store/userSlice"

export const ArticleScreen = ({ route }) => {
  const dispath = useDispatch()
  const { article } = route.params

  const clips = useSelector((state) => state.user.clips)

  const isClipped = clips.some((clip) => clip.url === article.url)

  const onPressClip = () => {
    if (isClipped) {
      dispath(deleteClip(article))
    } else {
      dispath(addClip(article))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={isClipped} />
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
