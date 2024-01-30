import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useAppTheme } from "../../hooks";


function HomeScreen(){

    const k = useNavigation()
    const [appTheme] = useAppTheme()
    const styl = style(appTheme)

    console.log(appTheme)

    
    return(
        <View style = {styl.container}>

        </View>
    )
}

const style =(theme: AppTheme) => StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.color.primary,
        marginTop: theme.spaceing.marginTop
    }
})

export default HomeScreen