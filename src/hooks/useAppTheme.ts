import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import { DiabeticTheme, DarkScheme, LightScheme } from "../theme/index"

const useAppTheme = () =>{

    //  useColorScheme hook is to identify the theme of the default system
    const colorScheme = useColorScheme()
    const [appTheme, setTheme] = useState(DiabeticTheme)
    
    useEffect(()=> {
        if( colorScheme === 'dark'){
            setTheme({...appTheme, color: DarkScheme})
        } else {
            setTheme({...appTheme, color: LightScheme})
        }
    }, [])
    return [appTheme]
}

export  {useAppTheme}