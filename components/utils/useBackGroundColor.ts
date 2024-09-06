import { useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export function useBackGroundColor(){
    const { colorScheme } = useMantineColorScheme();

    const [ darkBackGround, setDarkBackGround ] = useState(false)

    useEffect(() => {
        if(colorScheme === 'dark') {
            setDarkBackGround(true)
        }else{
            setDarkBackGround(false)
        }
    }, [colorScheme])
    
    return { darkBackGround }
}