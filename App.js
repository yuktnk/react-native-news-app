import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "./screens/HomeScreen"
import { ArticleScreen } from "./screens/ArticleScreen"
import { ClipScreen } from "./screens/ClipScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

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
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="ClipTab" component={ClipScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
