import { Center, Container, Grid, List, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import driver from '../../assets/driverSleeping.png';
import carImage from '../../assets/login_side_image.jpg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";
const adas = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${carImage.src}) no-repeat center`}} className={classes.container} fluid>
                <Container >
                    <Stack justify="center">
                        <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter' opacity='0.8' fz={30}  style={{textAlign: 'center' }}>
                        ADVANCED DRIVER ASSISTANT SOLUTIONS
                        </Title>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: 'center' }}>
                        ADAS
                        </Title>
                    </Stack>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25}>
                ADVANCE DRIVER ASSISTANT SOLUTIONS (ADAS)
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Advanced Telematics Solutions provides the most efficient and effective on-road technology to help avoid collisions though our solution—Advance Driver Assistance Systems (ADAS).
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Forward Collision Warning—judging from the relative time of the collision, the system warns the driver when the host vehicle is running too close to the vehicle ahead to give them ample time to take measure is securing safety.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Pedestrian Collision Warning—an alert from the system will notify the driven when there’s an imminent collision if cyclists, motorcycle drivers, and pedestrians enter the danger zone. 
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Lane Departure Warning—the system will alert the driver if they veer off from their current lane without turning on the cornering lamp.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Dual Camera and Warning Display—ADAS adopts the dual camera design—one for forwarding collision avoidance and another for driver’s fatigue monitoring. Both warning displays can be connected with a 3rd party display system or the vehicle’s original display by the RCA video output. Based on artificial vision technology, this solution enhances fleet safety and provides a totally different driving experience.
                </Title>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        THE DRIVER-FACING CAMERA INCLUDES THE FOLLOWING FEATURES:
                        </Title>
                        <List >
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                Driver’s eyes closed warning
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='xs'>
                                Driver’s yawn warning
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='xs'>
                                Driver’s inattention warning
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='xs'>
                                Driver smoking warning
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='xs'>
                                Driver using phone/gadget warning
                                </Title>
                            </List.Item>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='xs'>
                                Driver’s absence warning
                                </Title>
                            </List.Item>
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        MORE INFO
                        </Title>
                        <List spacing='xl'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                The Advanced Driver Assistance System will enhance your fleet, improve your driving behavior and ensure your safety on the road.
                                </Title>
                            </List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Center mt='lg'>
                    <Image width={400} height={300} src={driver.src} alt={""} />
                </Center>
        </Container>
        </Layout>
     );
}
 
export default adas;