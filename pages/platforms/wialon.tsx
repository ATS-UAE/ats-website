import { Container, Grid, Image, List, Stack, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import wailon from '../../assets/wialon.png';
import wailonLogo from '../../assets/wialonLogo.png';
import Layout from "../../components/Layout/Layout";
import { useBackGroundColor } from "../../components/utils/useBackGroundColor";
import classes from "../../css/Container.module.css";

const wialon = () => {
    const theme = useMantineTheme();
    const { darkBackGround } = useBackGroundColor()
    const smallScreen = useMediaQuery('(max-width: 56.25em)');

    const content = [
        <>
            <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold' fz={18} mt='lg'>
                Unleash the Power of Wialon:
            </Title>
            <List>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                    Real-Time GPS Tracking: Wialon provides you with live updates on the location and movement of your fleet, empowering you with the knowledge to make informed decisions on the fly.
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Telematics at Your Fingertips: Wialon offers comprehensive telematics data, allowing you to monitor everything from engine health to driver behavior, ensuring optimal efficiency and safety.
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Fuel Monitoring for Cost Efficiency: Watch your bottom line improve with Wialon's fuel monitoring capabilities. Keep a close eye on fuel consumption, detect anomalies, and implement strategies to reduce costs and environmental impact
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Intelligent Maintenance Scheduling: Receive timely reminders for routine check-ups, minimizing downtime and maximizing the lifespan of your fleet
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Route Optimization for Efficiency: Optimize your routes to save on fuel costs and increase overall efficiency.
                    </Title>
                </List.Item>
            </List>
        </>
        ,
        <Stack h={'100%'} justify='center' mt={smallScreen ? 'xl' : undefined}>
            <Image w={300}  src={wailonLogo.src} style={{backgroundColor: darkBackGround ? theme.colors.gray[0] : undefined}} radius={30} alt={""} />
        </Stack>
    ]
    return ( 
        <Layout withBorder>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${wailon.src}) no-repeat top`}} className={classes.container} fluid>
                <Container >
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title  order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign:'center' }} tt='uppercase'>
                    Wialon
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                In the dynamic world of modern business, effective fleet management is the key to success. 
                Picture this: real-time tracking, optimized routes, and streamlined operations—all at your fingertips. Enter Wialon, 
                the game-changing GPS tracking and fleet management platform that is set to revolutionize the way you oversee your vehicles, assets, and mobile workforce.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Tailored for Every Industry Whether you're in logistics, transportation, construction, agriculture, or public services,
                Wialon is designed to meet the diverse needs of your industry. 
                Its scalability and flexibility make it the ideal choice for businesses of all sizes, adapting to your unique requirements seamlessly.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Access Anytime, Anywhere Wialon's web-based and mobile interfaces bring convenience to the forefront.
                Monitor your fleet, receive alerts, and make crucial decisions from the palm of your hand, giving you unprecedented control over your operations—no matter where you are.
                </Title>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 9}>
                        {smallScreen ? content[1] : content[0]}
                    </Grid.Col>
                    <Grid.Col offset={smallScreen ? 0 : 1} span={smallScreen ? 12 : 2}>
                        {smallScreen ? content[0] : content[1]}
                    </Grid.Col>
                </Grid>
            </Container>
        </Layout>
     );
}
 
export default wialon;