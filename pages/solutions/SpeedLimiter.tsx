import { Container, Grid, List, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import speedImage from '../../assets/speedLimit.jpeg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";
const SpeedLimiter = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${speedImage.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign:'center' }}>
                    SPEED LIMITER
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25}>
                WHAT IS A SPEED LIMITER?
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Speed limiters are “active” device controlling the vehicle’s top speed without requiring administration like GPS system which “passively records” history that needs to be administered. Top speed limiters are installed in vehicles to either comply with government legislation or as a personal requirement of the owner.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Advance Telematics Solutions provides the dynamicRomatic Speed Limiter which can be set to any speed and can be removed if the vehicle is resold.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Installment of speed limiters on your vehicles will lessen the probability of an accident and decrease fuel consumption and emission. 
                </Title>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='lg'>
                WHY FIT A SPEED LIMITER?
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Many countries have introduced legislation and numerous companies have taken the decision to fit Speed Limiters.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                WHY? – reduction in deaths, fuel consumption, andemissions. Fuel savings and emissions  (Co2) in excess of 20% have been achieved by fitting a speed limiter.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Some companies  have also adopted a policy of fitting Speed Limiters as part of their ‘Duty of Care’ requirements. 
                </Title>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        SPEED LIMITER OPTIONS:
                        </Title>
                        <List >
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                Road Speed Controls – Rev Limiters – Reversing Limiters – PTO Limiters
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Automatic Dual Speed for Trailers
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Automatic Dual Speed for Off Road
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Low-Speed Limiters
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Emergency Vehicle Speed Limiters
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Geokontrol (Geo-Fence) Speed Limiters
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Data Logging Speed Limiters
                                </Title>
                            </List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        MAIN BENEFITS
                        </Title>
                        <List>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                Saves lives through the reduction of high-speedaccidents.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Saves fuel thereby reducing cost per mile.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Reduces exhaust emissions thereby reducing air pollution and ozone destruction.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Reduced maintenance costs.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Reduced vehicle downtime.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Reduces staff lost through speeding bans.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Could reduce insurance costs.
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} >
                                Increases residual value.
                                </Title>
                            </List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Ensure your safety from high-speed accidents, lessen fuel consumption, reduce maintenance cost, and increase residual value by installing our Speed Limiters. 
                </Title>
        </Container>
        </Layout>
     );
}
 
export default SpeedLimiter;