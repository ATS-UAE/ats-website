import { Container, Grid, List, Paper, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import city from '../../assets/city.jpg';
import laptop from '../../assets/laptop.png';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";

const CarSharing = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    const content = [
        <>
            <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
            Register an account to the application and start booking! Choose the car of your choice based on your preferences, transmission, seat capacity, and fuel costs.
            </Title>
            <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold' fz={18} mt='lg'>
            Benefits of booking a car include:
            </Title>
            <List>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                    Quality service
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Assured individual attention
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Advanced booking to have a hassle-free travel
                    </Title>
                </List.Item>
                <List.Item>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                    Reasonable rates
                    </Title>
                </List.Item>
            </List>
        </>
        ,
        <Paper mt={'xl'}>
            <Image width={300} height={200} src={laptop.src} alt={""} />
        </Paper>

    ]
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${city.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign:'center' }}>
                    CAR SHARING
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Need a car to pick you up from the airport? Or just need to go to the grocery store? Or a car for the holiday getaway? Book a car now using Advance Telematics Solutions Carsharing Application!
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                The application is also available on Android phones for fast and efficient car sharing necessities and can be downloaded for iOS devices soon!
                </Title>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 9}>
                        {smallScreen ? content[1] : content[0]}
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 3}>
                        {smallScreen ? content[0] : content[1]}
                    </Grid.Col>
                </Grid>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    Ensure the efficiency and quality of service on your next car booking. Download the app and start booking with Advanced Telematics Solutions!
                    </Title>
            </Container>
        </Layout>
     );
}
 
export default CarSharing;