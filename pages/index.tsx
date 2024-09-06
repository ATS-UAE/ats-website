import { ActionIcon, Button, Card, Center, Container, Divider, Grid, Group, Image, Stack, Text, Title, UnstyledButton, rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaClock, FaCoins, FaFacebookSquare, FaIdCard, FaLinkedin, FaLock, FaLongArrowAltLeft, FaLongArrowAltRight, FaThumbsUp, FaTwitter, FaVideo } from "react-icons/fa";
import { FaBusSimple, FaGear, FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { TbArrowDown } from "react-icons/tb";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import DVR from '../assets/DVR.jpeg';
import buses from '../assets/buses.jpeg';
import fleet from '../assets/cars.jpeg';
import city from '../assets/city.jpg';
import ipad from '../assets/ipad.png';
import cars from '../assets/login_side_image.jpg';
import map from '../assets/map.jpeg';
import excavator from '../assets/mining-excavator.jpeg';
import mountines from '../assets/mountines.jpeg';
import speedLimit from '../assets/speedLimit.jpeg';
import wialon from '../assets/wialon.png';
import { Counter } from "../components/Animation/Counter";
import ContactForm from "../components/HomePage/ContactForm";
import Features from "../components/HomePage/Features";
import KeyBenifits from "../components/HomePage/KeyBenifits";
import Layout from "../components/Layout/Layout";
import { useBackGroundColor } from "../components/utils/useBackGroundColor";
import carousel from "../css/Carousel.module.css";
import classes from "../css/Container.module.css";


export default function HomePage() {
  const { darkBackGround } = useBackGroundColor()

  const homeRef = useRef<HTMLDivElement>(null)
  const benifitsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)
  const contactsRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams().get('page')

  setTimeout(() => {
      if(searchParams === 'benifits') benifitsRef.current?.scrollIntoView({behavior: 'smooth'})
      if(searchParams === 'features') featuresRef.current?.scrollIntoView({behavior: 'smooth'})
      if(searchParams === 'posts') postsRef.current?.scrollIntoView({behavior: 'smooth'})
      if(searchParams === 'contacts') contactsRef.current?.scrollIntoView({behavior: 'smooth'})
    }, 500)
    
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const leftToRightVarient = {
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      } 
    },
    hidden: { 
      x: -200,
      opacity: 0,
     }
  }

  const downToUpVarient = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      } 
    },
    hidden: { 
      y: 200,
      opacity: 0,
     }
  }

  const rightToLeftVarient = {
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      } 
    },
    hidden: { 
      x: 200,
      opacity: 0,
     }
  }

  const pops = {
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      } 
    },
    hidden: { 
      opacity: 0,
     }
  }

  // const nodeRef = useRef();


  const viewport: { once: boolean, amount: number | "all" | "some" | undefined}  = {
    once: true, 
    amount: 0.7,
  }

  const theme = useMantineTheme();
  const smallScreen = useMediaQuery('(max-width: 56.25em)');
  const router = useRouter()
  
  const keyBenefitsLeftSide = [
      {icon: FaPeopleGroup , title: 'INCREASES EMPLOYEE PRODUCTIVITY', body: 'The system is accessible via any Internet-connected computer enabling real-time monitoring of mobile assets.'},
      {icon: FaClock , title: 'REDUCES OVERTIME', body: 'Our system provides start and stop reports and track when a vehicle arrives and leaves from a job site, an office, etc.'},
      {icon: FaLock , title: 'INCREASES SAFETY', body: 'Monitor vehicles’ speeds. Users will also be alerted when a vehicle exceeds a customizable speed limit threshold.'},
    ].map((benefit) => (
      <KeyBenifits key={benefit.title} icon={benefit.icon} title={benefit.title} body={benefit.body} />
    ));

  const keyBenefitsRightSide = [
      {icon: FaCoins , title: 'DECREASES FUEL COSTS', body: 'Routes are optimized, reducing miles driven. Gas receipts can be confirmed to a vehicle’s position report. It also provides mileage reports.'},
      {icon: FaThumbsUp , title: 'INCREASES CUSTOMER SATISFACTION', body: 'Achieve more accurate service billing and appointment promptness and improve delivery times.'},
      {icon: FaGear , title: 'REDUCES MAINTENANCE COSTS', body: 'Users can manage vehicle maintenance schedules with the maintenance application'},
    ].map((benefit) => (
      <KeyBenifits key={benefit.title} icon={benefit.icon} title={benefit.title} body={benefit.body} />
    ));

  const features = [
      {icon: FaIdCard , title: 'Driver Assistant Solutions', body: 'Introducing a revolutionary Advance Driver Assistant Solutions (ADAS).'},
      {icon: FaLocationDot , title: 'Fleet Management & Tracking Solutions', body: 'A technology that helps companies achieve the lower the risk while improving productivity and efficiency.'},
      {icon: FaBusSimple , title: 'School Bus Solutions', body: 'An intelligent system that allows the movement and location of school students to be monitored during transportation.'},
      {icon: FaVideo , title: 'Vehicle Mobile DVR', body: 'Helps fleet owners monitor their assets around the clock through the intelligent cameras.'},
      {icon: IoSpeedometer , title: 'Speed Limiter', body: 'Electronically control the top speed of vehicles, either to comply with government legislation or the vehicle owner’s requirements.'},
    ].map((benefit) => (
      <Features key={benefit.title} icon={benefit.icon} title={benefit.title} body={benefit.body} />
      ));
    const posts = [
        {image: cars, date: 'March 10, 2019', title: 'ABOUT US', body: 'Introducing a revolutionary Advance Driver Assistant Solutions (ADAS) ...', link: () => {router.push('/AboutUs')}},
        {image: city, date: 'March 10, 2019', title: 'Driver Assistant Solutions', body: 'Introducing a revolutionary Advance Driver Assistant Solutions (ADAS) ...', link: () => {router.push('/solutions/adas')}},
        {image: fleet, date: 'March 10, 2019', title: 'Fleet Management & Tracking Solutions', body: 'A technology that helps companies achieve the lower the risk while improving productivity and efficiency ...', link: () => {router.push('/solutions/FleetManagementTrackingSolutions')}},
        {image: buses, date: 'March 10, 2019', title: 'School Bus Solutions', body: 'An intelligent system that allows the movement and location of school students to be monitored  during transportation ...', link: () => {router.push('/solutions/SchoolBusSolutions')}},
        {image: wialon, date: 'March 15, 2019', title: 'wialon', body: 'In the dynamic world of modern business, effective fleet management is the key to success. Picture this: real-time tracking, optimized routes, and streamlined operations ...', link: () => {router.push('/platforms/wialon')}},
        {image: cars, date: 'March 10, 2019', title: 'Logistics', body: 'To relieve you from the timely administrative work and effort-consuming activities of delivery and transportation ...', link: () => {router.push('/solutions/logistics')}},
        {image: excavator, date: 'March 10, 2019', title: 'Equipment booking', body: 'Your equipment bookings are just a few clicks away through our Reserve Carsharing Application ...', link: () => {router.push('/solutions/EquipmentBooking')}},
        {image: DVR, date: 'March 10, 2019', title: 'vehicle mobile dvr', body: 'Advanced Telematics Solutions offers help in monitoring fleets around the clock and ensure that any movement inside and outside of the vehicle is being observed through our Advanced Vehicle Mobile DVR ...', link: () => {router.push('/solutions/VehicleMobileDVR')}},
        {image: cars, date: 'March 10, 2019', title: 'car sharing', body: 'Need a car to pick you up from the airport? Or just need to go to the grocery store? Or a car for the holiday getaway? Book a car now using Advance Telematics Solutions Carsharing Application ...', link: () => {router.push('/solutions/CarSharing')}},
        {image: speedLimit, date: 'March 10, 2019', title: 'speed limiter', body: 'Speed limiters are “active” device controlling the vehicle’s top speed without requiring administration like GPS system which “passively records” history that needs to be administered ...', link: () => {router.push('/solutions/SpeedLimiter')}},
    ].map( (post, index) => {
      return (
        <Carousel.Slide key={`post-${index}`}>
            <Card key={post.title} bg={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} h={630}>
            <Center>
                <Image width={600} height={400} src={post.image.src} alt="" />
            </Center>
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw={100} fz={15} style={{textAlign: 'center' }}>
                {post.date}
              </Title>
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={25} style={{textAlign: 'center' }} tt='uppercase'>
                {post.title}
              </Title>
              
              <Text  ff={`Greycliff CF, ${theme.fontFamily}`} fw={300} fz={15} style={{textAlign: 'center' }}>
                {post.body}
              </Text>
              <Center>
                <UnstyledButton mt='lg' onClick={post.link}>Read More</UnstyledButton>
              </Center>
            </Card>
        </Carousel.Slide>
      )
    })

    const clients = [ cars, cars, cars, cars, cars, cars, cars].map((client, index) => {
      return(
        <Carousel.Slide key={index}>
          <Image src={client.src} alt={""} />
        </Carousel.Slide>
      )
    })

    const office = ['Office 9 C-11', 'I-Rise Tower', 'Barsha Heights – Dubai', 'Tel No.: +971 4 5519 488'].map((officeLocation, index) => {
      return (
        <Title order={1} mt='sm' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={250}  fz={15} key={index}>
          {officeLocation}
        </Title>
      )
    })

    const contacts = [{to:'24/7 Support:' ,contact: 'support@atsuae.net'}, {to:'Send your inquries:' ,contact: 'info@atsuae.net'}].map((contact, index) => {
      return (
        <div key={index}>
          <Title order={1} mt='sm' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={250}  fz={15}>
            {contact.to}
          </Title>
          <Title order={1}  ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={250}  fz={15}>
            {contact.contact}
          </Title>
        </div>
      )
    })

    const information = [
      <Stack  align="center">
        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={30} style={{textAlign: 'center' }}>
          Be up-to-date and track your assets with your smartphones!
        </Title>
        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={20} style={{textAlign: smallScreen ? 'center' : 'left' }}>
          You can track your units not only from a full-sized desktop computer but also from a smartphone, tablet, and other mobile devices.
        </Title>
        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={20} style={{textAlign: smallScreen ? 'center' : 'left' }}>
        The interface is adapted for such cases. Moreover, a special mobile application for Android and iOS is available as well as two previously developed web applications.
        </Title>
      </Stack>
      ,
      <Stack  align="right">
        <Image  src={map.src} alt={""} />
      </Stack>
    ]


  return (
    <Layout refs={[{label: 'HOME', ref: homeRef},{label: 'BLOGS', ref: postsRef}, {label: 'BENFITS', ref: benifitsRef},{label: 'CONTACTS', ref: contactsRef}]}>
        <Container ref={homeRef} p={0} pt={smallScreen ? 50 : 0}  style={{'--image': `url(${cars.src}) no-repeat center`}} className={classes.container} fluid>
          <Container py={smallScreen ? 0 : 150}>
            <Title order={1}  ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={50}  style={{textAlign: smallScreen ? 'center' : 'left' }}>
              Fleet Management Solutions & Vehicle Tracking Systems
            </Title>
            <Title order={2}  style={{textAlign: smallScreen ? 'center' : 'left'}} ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.8} fw={500} fz={20} >
              Advance Telematics Solutions offers a combination of excellent technical expertise and user-friendly solutions in Fleet Management and Vehicle Tracking Solutions.
            </Title>
            <Button rightSection={<TbArrowDown />} radius={100} mt='lg' onClick={() => router.push('/?page=features')} fullWidth={smallScreen}>Learn More</Button>
          <Container ref={featuresRef} />
          </Container>
        </Container>


          <Container  fluid >
            <Container >
              <motion.div
                variants={rightToLeftVarient}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                >
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={50} style={{textAlign: 'center' }} mt='md'>
                    Protect and manage your assets with our latest fleet management solutions!
                </Title>
              </motion.div>
              <motion.div
              variants={rightToLeftVarient}
              layout
              viewport={viewport}
              >
              <Title order={4} ff={`Greycliff CF, ${theme.fontFamily}`} fw={50} fz={25} mt='lg' style={{textAlign: 'center' }}>
              Delivering the highest quality of  Fleet Management and Tracking Solutions to meet the client’s needs and even exceed expectations.
              </Title>
              </motion.div>
              <motion.div
              variants={downToUpVarient}
              layout
              viewport={{once: true, amount: 0.7}}
              >
                <Grid mt='lg' columns={60} >
                  {features}
                </Grid>
                <Center mt='md'>
                  <Button radius={100} fullWidth={smallScreen}>See More</Button>
                </Center>
              </motion.div>
            </Container>
          </Container>
          <Divider  ref={benifitsRef} my= {80} />
        <Container  fluid  >
          <Container p={0}>
            <motion.div
            variants={rightToLeftVarient}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            >
              <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={50} style={{textAlign: 'center' }}>
                Key Benefits
              </Title>
            </motion.div>
            <motion.div 
            variants={rightToLeftVarient}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            >
              <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={25} fz={20} mt='lg' style={{textAlign: 'center' }}>
              WITH THE ATS FLEET MANAGEMENT SOLUTIONS, CUSTOMERS CAN HAVE THE FOLLOWING BENEFITS.
              </Title>
            </motion.div>
              <Grid mt='lg' mb='xl'>
                <Grid.Col span={{lg: 4}}>
                  <motion.div
                  variants={leftToRightVarient}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.6}}
                  >
                  <Grid>
                    {keyBenefitsLeftSide}
                  </Grid>
                  </motion.div>
                </Grid.Col>
                <Grid.Col span={{lg: 4}} >
                <motion.div
                  variants={pops}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.6}}
                  >
                    <Stack mt={smallScreen? undefined : '100'} align="center">
                      <Image  src={ipad.src} alt={""} />
                    </Stack>
                  </motion.div>
                </Grid.Col>
                <Grid.Col span={{lg: 4}}>
                <motion.div
                  variants={rightToLeftVarient}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.6}}
                  >
                    <Grid>
                      {keyBenefitsRightSide}
                    </Grid>
                  </motion.div>
                </Grid.Col>
              </Grid>
          </Container>
        </Container>
        <Container  h={200} mb={smallScreen ? 50 : 200}  style={{'--image': `url(${mountines.src}) no-repeat center`}} className={classes.container} fluid >
          <motion.div
          variants={pops}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.7}}
          >
            <Grid pt={50} align="center">
              <Grid.Col span={4}>
                <Counter from={0} to={16045} />
                <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={300} fz={smallScreen ? 20 : 25}  style={{textAlign: 'center' }}>
                  SOLD GPS DEVICES
                </Title>
              </Grid.Col>
              <Grid.Col span={4}>
                <Counter from={0} to={167} />
                <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={300} fz={smallScreen ? 20 : 25}  style={{textAlign: 'center' }}>
                  HAPPY CLIENTS
                </Title>
              </Grid.Col>
              <Grid.Col span={4}>
                  <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={3000} fz={smallScreen ? 25 : 50}  style={{textAlign: 'center' }}>
                      24/7
                  </Title>
                  <Title order={6} ff={`Greycliff CF, ${theme.fontFamily}`} fw={300} fz={smallScreen ? 20 : 25}  style={{textAlign: 'center' }}>
                      SUPPORT
                  </Title>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Container>

        <Container fluid>
          <Container p={0}>

              <Grid>
                <Grid.Col span={smallScreen ? 12 : 6}>
                  <motion.div
                  variants={leftToRightVarient}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.7}}
                  >
                    {smallScreen ? information[1] : information[0]}
                  </motion.div>
                </Grid.Col>
                <Grid.Col span={smallScreen ? 12 : 6} >
                  <motion.div
                  variants={rightToLeftVarient}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.7}}
                  >
                    {smallScreen ? information[0] : information[1]}
                  </motion.div>
                </Grid.Col>
              </Grid>
          </Container>
        </Container>
        <div  ref={postsRef} />
        <Container pb='lg' mt={smallScreen ? 50 : 200} fluid bg={darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
          <Container fluid w={'80%'}>
            <motion.div
            variants={rightToLeftVarient}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.7}}
            >
              <Title order={1} pt={50} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={50} style={{textAlign: 'center' }} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                Latest Posts
              </Title>
            </motion.div>
            <motion.div 
            variants={rightToLeftVarient}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.7}}
            >
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={150}  fz={28} style={{textAlign: 'center' }} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                READ AND LEARN MORE ABOUT FLEET MANAGEMENT SOLUTIONS
              </Title>
            </motion.div>
            <motion.div
            variants={downToUpVarient}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            >
              <Carousel
                nextControlIcon={<FaLongArrowAltRight  style={{ width: rem(30), height: rem(30), backgroundColor: 'black', borderRadius: 50, padding: 5}} color="white" />}
                previousControlIcon={<FaLongArrowAltLeft  style={{ width: rem(30), height: rem(30), backgroundColor: 'black', borderRadius: 50, padding: 5 }} color="white" />}
                slideSize={smallScreen ? "100%" : "50%"}
                slideGap="md"
                align="start"
                mt='lg'
                loop
                slidesToScroll={smallScreen ? 1 : 2}
                classNames={carousel}
                >
                  {posts}
              </Carousel>
            </motion.div>
          </Container>
        </Container>
        <Container mt={smallScreen ? 50 : 100} >
          <motion.div
          variants={rightToLeftVarient}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.6}}
          >
            <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={50} style={{textAlign: 'center' }}>
              Clients
            </Title>
          </motion.div>
          <motion.div
          variants={rightToLeftVarient}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.7}}
          >
            <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={150}  fz={28} style={{textAlign: 'center' }}>
              WE'VE WORKED AND CONTINUED TO PROVIDE ADVANCED FLEET MANAGEMENT SOLUTIONS WITH SEVERAL HAPPY CLIENTS
            </Title>
          </motion.div>
            <Carousel
                // height={200}
                slideSize="20%"
                align="start"
                slideGap={"md"}
                loop
                mt='lg'
                slidesToScroll={4}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                >
                    {clients}
            </Carousel>
        </Container>
        <Container ref={contactsRef} />
        <Container mt={smallScreen ? 50 : 100}>
          <Grid>
            <Grid.Col span={smallScreen ? 12 : 6}>
              <motion.div
              variants={leftToRightVarient}
              layout
              viewport={{once: true, amount: 0.7}}
              >
                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={35}>
                  Contact Us
                </Title>
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={250}  fz={20}>
                We aim to be the premier choice and most trusted solutions provider in the United Arab Emirates.
              </Title>
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} opacity={0.5} fw={250}  fz={20}>
                Grow and move with us!
              </Title>
              <Grid>
                <Grid.Col span={smallScreen ? 12 : 6}>
                  <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw={400}  fz={15}>
                    MAIN OFFICE
                  </Title>
                  {office}
                </Grid.Col>
                <Grid.Col span={smallScreen ? 12 : 6}>
                  <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw={400}  fz={15}>
                    EMAIL
                  </Title>
                  {contacts}
                </Grid.Col>
              </Grid>
              <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw={400} fz={18} >
                CONNECT
              </Title>
              <Group mt='md'>
                <ActionIcon onClick={() => window.open('https://www.facebook.com/atsuae.net', '_blank')}><FaFacebookSquare size={25} /></ActionIcon>
                <ActionIcon onClick={() => window.open('http://www.twitter.com/@atsuae_', '_blank')}><FaTwitter size={25} /></ActionIcon>
                <ActionIcon onClick={() => window.open('https://www.linkedin.com/company/advance-telematics-solutions', '_blank')}><FaLinkedin size={25} /></ActionIcon>
              </Group>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={smallScreen ? 12 : 6}>
              <motion.div
              variants={rightToLeftVarient}
              layout
              viewport={{once: true, amount: 0.7}}
              >
                <ContactForm />
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>

    </Layout>
  );
}
// 82547  
//80635