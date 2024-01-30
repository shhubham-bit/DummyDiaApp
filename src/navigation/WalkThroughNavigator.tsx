import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import HomeScreen from "../screens/Home/HomeScreen";

type RootStackParamList = {
    Walk: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

const WN = createStackNavigator<RootStackParamList>()

function WalkThroughNavigator(){
 return(
    <WN.Navigator>
        <WN.Screen name="Walk" component={HomeScreen}/>
    </WN.Navigator>
 )
}

export default WalkThroughNavigator