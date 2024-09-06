import { Container, Grid, List, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import buses from '../../assets/buses.jpeg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";
const SchoolBusSolutions = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    const features = ['Stop point monitoring.', 'Graphical dashboard and reports analysis.', 'Bus route optimization.', 'Diver management and evaluation.',
    'Student identification and monitoring by RFID.', 'Incident notifications and alerts.', 'SMS and monitoring facilities for parents.', 'Bus maintenance.',
    'Mobile DVR/CCTV camera.'
    ]
    .map((benifit, index) => {
        return (
            <List.Item key={index}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16}>
                {benifit}
                </Title>
            </List.Item>
        )
    })

    const parentsBenifits = ['Student arriving.', 'Student leaving.', 'Student attendance checking.', 'Smart application access.', 'Web portal access.']
    .map((benifit, index) => {
        return (
            <List.Item key={index}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16}>
                {benifit}
                </Title>
            </List.Item>
        )
    })

    const schoolBenifits = ['Bus routes and stops monitoring.', 'Student’s check-in and check-out alerts.', 'Driver behavior monitoring.', 
    'Activities of the students in the bus monitoring.', 'Bus scheduling and monitoring.']
    .map((benifit, index) => {
        return (
            <List.Item key={index}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16}>
                {benifit}
                </Title>
            </List.Item>
        )
    })

    const managmentBenifits = ['Cost reduction through: Fleet utilization optimization, Idling control, Over speed control, Total loss vehicle reduction, and Scheduled services.', 
    'Driving habit monitoring.', 'After office hours of driving monitoring.', 'Management of the maintenance history of the vehicle.']
    .map((benifit, index) => {
        return (
            <List.Item key={index}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16}>
                {benifit}
                </Title>
            </List.Item>
        )
    })

    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${buses.src}) no-repeat center`}}  className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 200 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign:'center' }}>
                        SCHOOL BUS SOLUTIONS
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Advanced Telematics Solutions assures the safety of children and students riding their school bus to and from their schools. As a major concern of parents, and focus transport authorities in the region, ATS answers the need for safer transportation of school buses through our solution Advanced School Bus Solution. This solution offers an intelligent system on monitoring of the movements and locations of the bus to ensure the safety of the students.
                </Title>
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        ADVANCED FEATURES:
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                Live bus tracking on a digital map.
                                </Title>
                            </List.Item>
                            {features}
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        BENEFITS FOR THE PARENTS
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                The Advanced Driver Assistance System will enhance your fleet, improve your driving behavior and ensure your safety on the road.
                                </Title>
                            </List.Item>
                            {parentsBenifits}
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        BENEFITS FOR THE SCHOOL:
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                All the features received by the parents.
                                </Title>
                            </List.Item>
                            {schoolBenifits}
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        BENEFITS FOR THE FLEET MANAGERS:
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                                The Advanced Driver Assistance System will enhance your fleet, improve your driving behavior and ensure your safety on the road.
                                </Title>
                            </List.Item>
                            {managmentBenifits}
                        </List>
                    </Grid.Col>
                </Grid>
        </Container>
        </Layout>
     );
}
 
export default SchoolBusSolutions;