import { Container, Grid, List, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cars from '../../assets/cars.jpeg';
import Layout from "../../components/Layout/Layout";
import classes from "../../css/Container.module.css";
import { theme } from "../../theme";

const FleetManagementTrackingSolutions = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    
    const features = ['Geo-fence based Reports and Analysis', 'Record Route, Speed and Stop Violations', 'Real-time and History Tracking of Vehicle on Map and Exception Reports',
    'Service & Security Alerts for suspicious events', 'Observe and Enforce Disciplined Driving', 'Driver Details and Identification Management', 'Driving Behavior and Attendance Monitoring',
    'Total Maintenance Management', 'Two-way communication between the Server and Device', 'User Level Security and Rights Management', 'Smartphone Application Support',
    'Smooth Integration with external systems'
    ]
    .map((feature, index) => {
        return (
            <List.Item key={index}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16}>
                {feature}
                </Title>
            </List.Item>
        )
    })

    const benifits = ['Fleet Cost Reduction thru Fleet Pool Management System.', 'Fuel and Maintenance Cost Reduction thru Idling Control.'
    ,'Fuel Cost Reduction thru Over Speed Control.', 'Accident Maintenance and Total Loss Vehicle Reduction thru Speed Control.', 'Maintenance Cost Reduction thru Scheduled/On-time Service.',
    'Insurance Cost Reduction thru Safe Guarding Assets and Driving Habit Monitoring.', 'Maintenance Cost reduction thru Driving Behavior Monitoring.', 'Fuel and Maintenance Cost Reduction thru After Office Hour Driving Monitoring.',
    'Operation Monitoring/Control to avoid Un-authorized usage and unwanted trips.', 'Finding Suitable Nearest Vehicle for Emergency Dispatches.', 'Finding Breakdown vehicles and assisting recovery team.',
    'Job Planning and Route Optimization based on Historic Travel Data.'
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
    return ( 
        <Layout>
            <Container p={0} pl={smallScreen ? 0 : 100} h={500} style={{'--image': `url(${cars.src}) no-repeat center`}} className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: 'center' }}>
                    FLEET MANAGEMENT & TRACKING SOLUTIONS
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Fleet Management is the optimization of costs, risks, and efficiency in fleet business. Fleet management best practices involve the use of technology and software solutions to help reduce costs, enforce driver safety, minimize risks, increase productivity, and schedule preventive maintenance to reduce downtime.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Vehicle Tracking Solutions are systems used to navigate and locate moving and non-moving vehicles through GPS. It helps in ensuring that vehicles arrive safely to their destinations.
                </Title>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Advance Telematics Solutions offers fleet management handle all management-related tasks from the beginning of the vehicle management cycle up to the end of it. It monitors fleet functions from the initial acquisition of a vehicle to its disposal. It will also handle such duties as vehicle profiling, activity monitoring, maintenance, driver monitoring and much more. 
                </Title>
                
                <Grid>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        KEY FEATURES:
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                                Vehicle Activity, Utilization
                                </Title>
                            </List.Item>
                            {features}
                        </List>
                    </Grid.Col>
                    <Grid.Col span={smallScreen ? 12 : 6}>
                    <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                        KEY BENEFITS:
                        </Title>
                        <List spacing='xs'>
                            <List.Item>
                                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={16} mt='lg'>
                                Fleet Cost Reduction thru Fleet Utilization Optimization.
                                </Title>
                            </List.Item>
                            {benifits}
                        </List>
                    </Grid.Col>
                </Grid>
                <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                Limit your liability, ensure that your drivers are safe, and that deliveries and service calls are made effectively and efficiently through our fleet management and vehicle tracking solutions.
                </Title>
        </Container>
        </Layout>
     );
}
 
export default FleetManagementTrackingSolutions;