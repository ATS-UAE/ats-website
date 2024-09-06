import { MantineTheme, Title } from "@mantine/core";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({ from, to, theme, smallScreen }: { from: number; to: number, theme?: MantineTheme, smallScreen?: boolean }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref)
    const [ viewed, setViewed ] = useState(false)
    useEffect(() => {
        if(isInView && !viewed){
            setViewed(true)
            animate(from, to, {
                duration: 1,
                onUpdate(value) {
                    if (ref.current) ref.current.textContent = value.toFixed(0);
                    }
                }
            )
        }
    }, [isInView, viewed])

    return (
            <Title order={1} ref={ref} ff={`Greycliff CF, ${theme?.fontFamily}`} fw={3000} fz={smallScreen ? 25 : 50}  style={{textAlign: 'center' }} />
    ) 
}

