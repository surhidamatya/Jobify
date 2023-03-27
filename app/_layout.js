import { Stack } from "expo-router";
import { useCallback } from "react";

import { useFonts } from "expo-font";
import * as SplasScreen from 'expo-splash-screen';

SplasScreen.preventAutoHideAsync(); 

const Layout = () =>{
    const[fonstLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fonstLoaded){
            await SplasScreen.hideAsync();
        }
    }, [fonstLoaded])
    if(!fonstLoaded) return null;
    return <Stack/>
}

export default Layout;
