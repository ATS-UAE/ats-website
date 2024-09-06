import { Container, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import carImage from '../assets/login_side_image.jpg';
import Layout from "../components/Layout/Layout";
import classes from "../css/Container.module.css";
import { theme } from "../theme";

const AboutUs = () => {
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    return ( 
        <Layout>
            <Container p={0} h={500} style={{'--image': `url(${carImage.src}) no-repeat center`}} className={classes.container} fluid>
                <Container >
                    <Title order={1} pt={smallScreen ? 0 : 100} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: 'center', justifyContent: 'center' }}>
                    About Us
                    </Title>
                </Container>
            </Container>
            <Container mt='xl' pl={smallScreen ? 0 : 100} fluid w={'70%'}>
                    <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25}>
                        OUR STORY
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    The company was founded in 2014 and was initially named Advance Technology Solutions in Dubai, UAE. As the Managing Director realized the potential of fleet management and vehicle tracking solutions in the market, he put to work his ideas and formed the company as a sole establishment.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    In 2016, the sole establishment was renamed to Advance Telematics Solutions (ATS) and started as a company with only three employees.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    Since then, ATS has achieved to equip and optimize over 4,000+ vehicles with its advanced solutions all around UAE and is continuously growing in manpower which operated and serve clients 24/7.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    To meet the market standards, ATS strived to sustainably improve its service and was approved by the Dubai Police, the Security Industry Regulatory Agency, Telecommunications Regulatory Authority (TRA), and Road and Transport Authority (RTA). Moreover, ATS is continuously building healthy partnerships with big companies in the UAE to improve and innovate its services.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    ATS aims to be the premier choice and most trusted solutions provider in the UAE.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    Grow and move with us!
                    </Title>
                    <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                    OUR MISSION
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    ATS’s sole mission is to deliver seamless services and expertise on Fleet Management Tracking Solutions to meet our client’s needs.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    ATS aims to help people optimize their vehicle operations through our experience, expertise, and commitment to our service. In ATS, we develop and utilize every manpower to contribute to ensuring that we exceed our client’s expectations. Our experience grows as we continue to strive for innovative ideas and solutions through teamwork and excellence.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    ATS implements the best professional practices to surpass the international and local Health, Safety, and Environment (HSE) Standards.
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    Our concern is where you are going.
                    </Title>
                    <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='bolder' fz={25} mt='50'>
                    OUR VISION
                    </Title>
                    <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={'normal'} fz={17} mt='lg'>
                    ATS envisages being at the forefront of the telematics industry within UAE by providing excellent and unsurpassed location intelligence solutions and services on monitoring mobile and/or fixed assets.
                    </Title>
            </Container>
        </Layout>
     );
}
 
export default AboutUs;