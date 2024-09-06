import { Container, List, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import DVR from '../../assets/DVR.jpeg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";
const VehicleMobileDVR = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${DVR.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: 'center'}}>
                        VEHICLE MOBILE DVR
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Advanced Telematics Solutions offers help in monitoring fleets around the clock and ensure that any movement inside and outside of the vehicle is being observed through our Advanced Vehicle Mobile DVR. Through this solution, we install intelligent cameras and Wi-Fi system in the vehicle to ensure safety monitoring.
                </Title>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold' fz={18} mt='lg'>
                KEY FEATURES:
                </Title>
                <List>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                        Remote Viewing and location tracking, displaying vehicle status and device information. real-time Tracking—Mobile DVR can upload data to the data center/server to secure remote viewing, Real-time
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Auto Event Push—When the Mobile DVR receives the signals from the vehicle sensor or GPS, it will push these data to the server immediately which enables the back office to quickly check what has happened.
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Auto Uploading and Advanced Wi-Fi Solution—The video footage triggered by a specific event, alarm or requested by the client is automatically uploaded to the server via Wi-Fi or 3G (if available).
                        </Title>
                    </List.Item>
                </List>
            </Container>
        </Layout>
     );
}
 
export default VehicleMobileDVR;