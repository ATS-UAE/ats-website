import { Container, Grid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import handPhonePhoto from '../../assets/handPhoneApp.png';
import excavatorImage from '../../assets/mining-excavator.jpeg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";

const EquipmentBooking = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    const content =  [
        <>
            <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
            Your equipment bookings are just a few clicks away through our Reserve Carsharing Application. The application is available on Android phones and will soon be obtainable on iOS. It is also a web-based application accessible on tablets, mobile phone, laptops, and computers where users can log in and start booking based on their definite needs.
            </Title>
            <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
            Registered users can choose a specific type of equipment, desired date and time, location, and an estimated cost of the booking based on location and equipment will be displayed on the page. Each equipment on the booking list will be accompanied by descriptive functionality for the information of the users.
            </Title>
            <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
            The application also features editing and cancellation of the equipment booking should the user feel the need to, as long as the booking has not been confirmed yet. For every confirmed booking, an email will be sent to the registered customer. Download the application and start booking your equipment with Advance Telematics Solutions!
            </Title>
        </>
        ,
        <Image width={300} height={300} src={handPhonePhoto.src} alt={""} />
    ]
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${excavatorImage.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign:'center' }}>
                    EQUIPMENT BOOKING
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 9}>
                        {smallScreen ? content[1] : content[0]}
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 3}>
                        {smallScreen ? content[0] : content[1]}
                    </Grid.Col>
                </Grid>
            </Container>
        </Layout>
     );
}
 
export default EquipmentBooking;