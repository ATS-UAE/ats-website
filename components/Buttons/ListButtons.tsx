import { UnstyledButton, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useRouter } from "next/router";

interface InavLinks {
    links: InavLinks[];
    to: string;
    label: string;
    onclick?: () => void
  }
export function ListButtons({link}:{link: InavLinks}){
    const theme = useMantineTheme();
    const { hovered, ref } = useHover();
    const router = useRouter()


    return (
        <UnstyledButton tt='uppercase'  component="div" onClick={() => link.onclick ? link.onclick() : router.push(link.to)} c={hovered ? '#68c926' : undefined} ref={ref}>
                {link.label}
        </UnstyledButton>
    )
}