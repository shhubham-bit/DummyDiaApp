import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import WalkThroughNavigator from "./WalkThroughNavigator";



const RootStack = createStackNavigator()

function AppRpute(){

    return(
        <NavigationContainer>
            <WalkThroughNavigator />
        </NavigationContainer>
    )
}

export default AppRpute