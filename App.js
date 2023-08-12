import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FontAwesome } from "@expo/vector-icons"

import { HomeScreen } from "./screens/HomeScreen"
import { ArticleScreen } from "./screens/ArticleScreen"
import { ClipScreen } from "./screens/ClipScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name="home" size={size} color={color} />
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />
    }
  },
})

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: "Home" }} />
        <Tab.Screen name="ClipTab" component={ClipScreen} options={{ headerShown: false, title: "Clip" }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
