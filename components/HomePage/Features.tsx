import { Grid, Stack, Title } from "@mantine/core"
import { IconType } from "react-icons"
import { theme } from "../../theme"

type Features = {
    icon: IconType
    title: string
    body: string
}

const Features = (features: Features) => {
    return (
        <Grid.Col span={{lg: 12, base: 60}}>
            <Stack align="center" justify="space-around">
                <features.icon size={50} />
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={50} fz={18} style={{textAlign: 'center' }}>
                    {features.title}
                </Title>
                <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={40} fz={15} style={{textAlign: 'center' }}>
                    {features.body}
                </Title>
            </Stack>
        </Grid.Col>
     );
}
 
export default Features;