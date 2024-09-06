import { Center, Grid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconType } from "react-icons";
import { theme } from "../../theme";
type Benefits = {
    icon: IconType
    title: string
    body: string
}
const KeyBenifits = (benefit: Benefits) => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    return (
        <>
            <Grid.Col span={{ lg: 3, sm: 1, base: 12 }}>
                <Center>
                    <benefit.icon size={70} style={{marginTop: smallScreen ? undefined :  30}} />
                </Center>
            </Grid.Col>
            <Grid.Col span={{ lg: 9, sm: 11, base: 12 }}>
                <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={25} fz={15} mt='lg' style={{textAlign: 'center' }}>
                {benefit.title}
                </Title>
                <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={25} fz={14} mt='lg' style={{textAlign: 'center' }}>
                {benefit.body}
                </Title>
            </Grid.Col>
        </>
    );
}
 
export default KeyBenifits;