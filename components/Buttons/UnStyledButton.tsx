import { UnstyledButton, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useEffect, useState } from "react";

export function  UnStyledButton({name, onClick, darkTheme}:{name: string, onClick: () => void, darkTheme: boolean}) {
    const theme = useMantineTheme();
    const [ color, setColor ] = useState(theme.colors.dark[8])
    const { hovered, ref } = useHover();
    useEffect(() => {
        if(darkTheme) {
            setColor(theme.colors.gray[0])
        }else{
            setColor(theme.colors.dark[8])
        }
    }, [darkTheme])
    
    return (  
        <UnstyledButton component="div" c={hovered ? 'lime' : color} tt='uppercase' variant="default" onClick={onClick} ref={ref}>{name}</UnstyledButton>
    );
}
 