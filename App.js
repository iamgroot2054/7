import "react-native-gesture-handler"
import * as React from "react"
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator}  from "@react-navigation/stack"

import HomeScreen from "./screens/HomeScreen";
import DailyPic from "./screens/DailyPic";
import SpaceCraft from "./screens/SpaceCrafts";
import StarMap from "./screens/StarMap";
const Stack=createStackNavigator()

function App() {

return(
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home"
screenOptions={{headerShown:false}}>
  <Stack.Screen name="Home"  component={HomeScreen}/>
  <Stack.Screen name="DailyPic"  component={DailyPic}/>
  <Stack.Screen name="SpaceCrafts"  component={SpaceCraft}/>
  <Stack.Screen name="StarMap"  component={StarMap}/>

</Stack.Navigator>
</NavigationContainer>
)

}
export default App