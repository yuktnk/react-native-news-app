import { NEWS_API_KEY } from "react-native-dotenv"

export default ({ config }) => {
  return {
    extra: {
      newsApiKey: NEWS_API_KEY,
    },
    ...config,
  }
}
