// import Image from "next/image";
import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import logo from '../../assets/ats_logo_xs.png';
import whitelogo from '../../assets/ats_logo_xs_white.png';
import classes from "../../css/Container.module.css";
export function Logo({h, w, darkTheme} : {h?: number, w?: number, darkTheme: boolean}) {
    const [img, setImg] = useState(logo)

    useEffect(() => {
        if(darkTheme) {
            setImg(whitelogo)
        }else{
            setImg(logo)
        }
    }, [darkTheme])
    
    return (
        <Image
        h={h}
        w={w}
        className={classes.img}
        src={img.src}
        alt="ats logo"
        fit='contain'
        />
    )
}