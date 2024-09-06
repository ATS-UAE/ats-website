import { Container, List, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import carImage from '../../assets/login_side_image.jpg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";
const logistics = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${carImage.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: 'center'}}>
                        LOGISTICS
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                To relieve you from the timely administrative work and effort-consuming activities of delivery and transportation, Advanced Telematics Solutions introduces the Logistics app. Optimize an end-to-end transaction between the dispatcher and the mobile driver to control all stages of delivery and field services and operations. Ensure quality and cost-efficient transportation and delivery service by utilizing our user-friendly application.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                The app will help you manage your orders through our process: add order, distribute order, monitor delivery, and generate reports. The app also features a maximum precise order description, option to attach and view files, and sort and filter by the core the core fields (name and cost, address, time interval, radius, client information, characteristics and product description, and unloading time).
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                There is also a web-based version of Logistics which includes effective operating procedures management: order placement, planning and distribution, Google Maps-based routing, delivery process monitoring, and coordination. 
                </Title>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold' fz={18} mt='lg'>
                Other features include:
                </Title>
                <List>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                        Import options
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Route planning
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Route control
                        </Title>
                    </List.Item>
                </List>
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold' fz={18} mt='lg'>
                Key Benefits:
                </Title>
                <List>
                <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                        Effective communication “dispatcher-driver-client”
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Precise order information to avoid misdirected orders
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Preliminary analysis of key performance indicators
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Option to view files attached to the order anytime and anyplace
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Import capabilities for the companies utilizing third-party accounting systems for order list generation
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Time and cost-saving due to relevant fleet allocation between delivery areas bound to warehouses
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Default characteristics for new orders
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Automatic order distribution based on relevant criteria
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Option to adjust the preliminary route
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Time-saving for the office and the field due to automatic route sheet creation
                        </Title>
                    </List.Item>
                    <List.Item>
                        <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='xs'>
                        Comprehensive analysis of mobile employee performance characteristics based on order reports
                        </Title>
                    </List.Item>
                </List>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                The application is designed for delivery personnel, and mobile drivers to ensure optimized communication and transactions. On the other hand, clients and customers may utilize the web version of Logistics and start their transactions.
                </Title>
        </Container>
        </Layout>
     );
}
 
export default logistics;