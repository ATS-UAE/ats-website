import { ActionIcon, Anchor, AppShell, Burger, Container, Divider, Grid, Group, HoverCard, Popover, Stack, Title, UnstyledButton, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useDisclosure, useHotkeys, useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/router";
import { PropsWithChildren, RefObject } from "react";
import { FaExternalLinkAlt, FaFacebookSquare, FaFax, FaLinkedin, FaMailBulk, FaPhoneAlt, FaRegClock, FaTwitter } from "react-icons/fa";
import { ListButtons } from "../Buttons/ListButtons";
import { UnStyledButton } from "../Buttons/UnStyledButton";
import { checkColor } from "../utils/checkColor";
import { useBackGroundColor } from "../utils/useBackGroundColor";
import { HeaderButton } from "./HeaderButton";
import { Logo } from "./Logo";
interface InavLinks {
    links: InavLinks[];
    to: string;
    label: string;
    onclick?: () => void
  }
const Layout = ({ children, withBorder, refs }: PropsWithChildren & {withBorder?: true, refs?: {label: string, ref: RefObject<HTMLDivElement>}[]}) => {
    const [{ y: scrollPosition }] = useWindowScroll();
    const { toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const router = useRouter()
    const { darkBackGround } = useBackGroundColor()


    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    const [opened, { toggle, close }] = useDisclosure();
    const smallScreen = useMediaQuery('(max-width: 56.25em)');
    const solutions: InavLinks[] = [
        {
            links: [],
            to: '/solutions/adas',
            label: 'ADVANCE DRIVER ASSISTANT SOLUTION (ADAS)',
        },
        {
            links: [],
            to: '/solutions/logistics',
            label: 'LOGISTICS APPLICATION',
        },
        {
            links: [],
            to: '/solutions/EquipmentBooking',
            label: 'EQUIPMENT BOOKING',
        },
        {
            links: [],
            to: '/solutions/FleetManagementTrackingSolutions',
            label: 'FLEET MANAGEMENT & TRACKING SOLUTIONS',
        },
        {
            links: [],
            to: '/solutions/SchoolBusSolutions',
            label: 'SCHOOL BUS SOLUTIONS',
        },
        {
            links: [],
            to: '/solutions/VehicleMobileDVR',
            label: 'VEHICLE MOBILE DVR',
        },
        {
            links: [],
            to: '/solutions/CarSharing',
            label: 'CAR SHARING',
        },
        {
            links: [],
            to: '/solutions/SpeedLimiter',
            label: 'SPEED LIMITER',
        },
    ]
    const platforms: InavLinks[] = [
        {
            links: [],
            to: '/platforms/wialon',
            label: 'Wialon',
        },
        {
            links: [],
            to: '/platforms/asateel',
            label: 'Asateel',
        },
        {
            links: [],
            to: '/platforms/securepath',
            label: 'SecurePath',
        },
    ]
    const collections: InavLinks[] = [
        {
            links: [],
            to: '/',
            label: 'HOME',
            onclick: () => {
                if(refs){
                    const findRef = refs.find(ref => ref.label === 'HOME')
                    if(findRef) findRef.ref.current?.scrollIntoView({behavior: 'smooth'})
                    else router.push('/')
                }
                else router.push('/')
            }
        },
        {
            links: [],
            to: '/AboutUs',
            label: 'ABOUT US',
        },
        {
            links: [],
            to: '/?page=benifits',
            label: 'BENFITS',
            onclick: () => {
                if(refs){
                    const findRef = refs.find(ref => ref.label === 'BENFITS')
                    if(findRef) findRef.ref.current?.scrollIntoView({behavior: 'smooth'})
                    else router.push('/?page=benifits')
                }
                else router.push('/?page=benifits')
            }
        },
        {
            links: solutions,
            to: '/fourth',
            label: 'SOLUTIONS',
        },
        {
            links: [],
            to: '/?page=posts',
            label: 'BLOGS',
            onclick: () => {
                if(refs){
                    const findRef = refs.find(ref => ref.label === 'BLOGS')
                    if(findRef) findRef.ref.current?.scrollIntoView({behavior: 'smooth'})
                    else router.push('/?page=posts')
                }
                else router.push('/?page=posts')
            }
        },
        {
            links: [],
            to: '/?page=contacts',
            label: 'CONTACTS',
            onclick: () => {
                if(refs){
                    const findRef = refs.find(ref => ref.label === 'CONTACTS')
                    if(findRef) findRef.ref.current?.scrollIntoView({behavior: 'smooth'})
                    else router.push('/?page=contacts')
                }
                else router.push('/?page=contacts')
            }
        },
        {
            links: platforms,
            to: '/seventh',
            label: 'Platforms',
        },
      ];

      const varient: Variants = {
        init:{
            width: '100%',
            height: '0px',
            position: 'fixed',
            transition: {
                duration: 0.4,
                ease: 'easeIn', 
            }
        },
        animate:{
            width: '100%',
            height: '80px',
            position: 'fixed',
            zIndex: 2,
            transition: {
                duration: 0.4,
                ease: "easeOut", 
            }
        } 
    } 
    
    const collectionLinks = collections.map((collection, index) => {
        if(collection.links.length){
            const links = collection.links.map((link, i) => {
                return (
                    <ListButtons key={link.label + `-links${i}`} link={link} />
                )
            })
            return (
                <Grid.Col span='content' key={collection.label + `${index}`}>
                    <HoverCard  shadow="md" arrowPosition='center' withArrow position={smallScreen ? 'right' : 'bottom' } >
                        <HoverCard.Target>
                        <UnstyledButton tt='uppercase' type="button" c={checkColor(darkBackGround, scrollPosition < 40, withBorder) ? theme.colors.gray[0] : theme.colors.dark[8]}>{collection.label}</UnstyledButton>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            {links}
                        </HoverCard.Dropdown>
                    </HoverCard>
                </Grid.Col>
            )
        }else {
            return <HeaderButton key={collection.label + `${index}`} name={collection.label} onClick={() => {collection.onclick ? collection.onclick() : router.push(collection.to); smallScreen && close()}} darkTheme={checkColor(darkBackGround, scrollPosition < 40, withBorder)} />
        }
      })

    const smallScreencollectionLinks = collections.map((collection, index) => {
        if(collection.links.length){
            const links = collection.links.map((link, i) => {
                return (
                    <ListButtons key={link.label + `-links${i}`} link={link} />
                )
            })
            return (
                <Popover width={200}  withArrow shadow="md">
                    <Popover.Target>
                    <UnstyledButton tt='uppercase' type="button" c={checkColor(darkBackGround, scrollPosition < 40, withBorder) ? theme.colors.gray[0] : theme.colors.dark[8]}>{collection.label}</UnstyledButton>
                    </Popover.Target>
                    <Popover.Dropdown bg='blue' style={{zIndex: 5}}>
                        <Title size="xs">This is uncontrolled popover, it is opened when button is clicked</Title>
                    </Popover.Dropdown>
                </Popover>
                    // <Popover  shadow="md" arrowPosition='center' withArrow position={smallScreen ? 'right' : 'bottom' } key={collection.label + `${index}`}>
                    //     <Popover.Target>
                    //     
                    //     </Popover.Target>
                    //     <Popover.Dropdown>
                    //         {links}
                    //     </Popover.Dropdown>
                    // </Popover>
            )
        }else {
            return <UnStyledButton key={collection.label + `${index}`} name={collection.label} onClick={() => {collection.onclick ? collection.onclick() : router.push(collection.to); smallScreen && close()}} darkTheme={checkColor(darkBackGround, scrollPosition < 40, withBorder)} />
        }
      })

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <AppShell
            header={{
                height: withBorder ? opened ? 0 : 80 : 0
            }}
            
            navbar={{
                width: 20,
                breakpoint: 'sm',
                collapsed: { desktop: true, mobile: !opened },
                
            }}
        >
            <AppShell.Header>
                <motion.div
                    variants={varient}
                    layout
                    initial={withBorder ? 'init' : 'init'}
                    animate={withBorder ? 'animate' : scrollPosition < 40 ? 'init' : 'animate'}
                    
                    exit={{
                        opacity: 0,
                    }}
                    style={{backgroundColor: withBorder ? darkBackGround ?  theme.colors.gray[2]: 'black' : darkBackGround ?  theme.colors.gray[2]: 'black'}}
                    >

                        
                    {smallScreen &&
                    <Group>
                        <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        />
                        <Logo h={70} darkTheme={checkColor(darkBackGround, scrollPosition < 40, withBorder)} />
                    </Group> 
                    }
                    {!smallScreen &&
                        
                        <Grid m={0} align='center' >
                            <Grid.Col offset={2} span={2}>
                                <Logo h={100} darkTheme={checkColor(darkBackGround, scrollPosition < 40, withBorder)} />
                            </Grid.Col>
                            {collectionLinks}
                        </Grid>
                    }
                </motion.div>
                
            </AppShell.Header>
            {smallScreen && <AppShell.Navbar >
                    <Group p='sm'>
                        <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        />
                        <Logo h={70} darkTheme={darkBackGround} />
                    </Group>
                    <Divider p={0} />
                        {smallScreencollectionLinks}
            </AppShell.Navbar>}

            <AppShell.Main>
                
                {children}
                    <Container fluid  mt={smallScreen ? 50 : 100} bg={darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                        <Grid >
                            <Grid.Col span={smallScreen ? 6 : 3}>
                                <Logo h={100} darkTheme={!darkBackGround} />
                            </Grid.Col>
                            <Grid.Col span={smallScreen ? 6 : 3}>
                                <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                    OUR VISION
                                </Title>
                                <Title order={1} mt='sm' ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                ATS envisages being at the forefront of the telematics industry within UAE by providing excellent and unsurpassed location intelligence solutions and services on monitoring mobile and/or fixed assets.
                                </Title>
                            </Grid.Col>
                            <Grid.Col span={smallScreen ? 6 : 3}>
                                <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                    CONTACT
                                </Title>
                                <Title order={1} mt='sm' ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                For all inquiries and concerns, please reach us through the following:
                                </Title>
                                    <Group mt='md'>
                                        <FaPhoneAlt color={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        +971 4 5519 488
                                        </Title>
                                    </Group>
                                    <Group mt='xs'>
                                        <FaFax color={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        +971 4 5519 359
                                        </Title>
                                    </Group>
                                    <Group mt='xs'>
                                        <FaMailBulk color={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        support@atsuae.net
                                        </Title>
                                    </Group>
                                    <Group mt='xs'>
                                        <FaExternalLinkAlt color={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                                        <Anchor href="https://atsuae.net/" target="_blank" fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                            atsuae.net
                                        </Anchor>
                                    </Group>
                                    <Group mt='xs'>
                                        <FaRegClock color={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        open 24/7
                                        </Title>
                                    </Group>
                            </Grid.Col>
                            <Grid.Col span={smallScreen ? 6 : 3}>
                                <Title order={1} mt='lg' ff={`Greycliff CF, ${theme.fontFamily}`} fw='bold'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                    Recent Posts
                                </Title>
                                <Stack gap={20} mt='md'>
                                    <Stack gap={2}>
                                        <Anchor href="https://atsuae.net/AboutUs" target="_blank" fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                            ABOUT US
                                        </Anchor>
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        March 10, 2019
                                        </Title>
                                    </Stack>
                                    <Stack gap={2}>
                                        <Anchor href="https://atsuae.net/" target="_blank" fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                            Choosing your Telematics Provider
                                        </Anchor>
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        March 8, 2019
                                        </Title>
                                    </Stack>
                                    <Stack gap={2}>
                                        <Anchor href="https://atsuae.net/" target="_blank" fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                            School Bus Tracking Solutions And Why You Need It
                                        </Anchor>
                                        <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                        March 8, 2019
                                        </Title>
                                    </Stack>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Container>
                    <Container bg={darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} fluid pb='md'>
                        <Container pt='lg' fluid w={'80%'} >
                            <Divider  size='md' c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]} />
                            <Group justify="space-between" mt='md'>
                                <Title order={1} ff={`Greycliff CF, ${theme.fontFamily}`} fw='lighter'  fz={15} c={!darkBackGround ? theme.colors.gray[0] : theme.colors.dark[8]}>
                                    @2019 Advance Telematics Solutions. All Rights Reserved.
                                </Title>
                                <Group>
                                    <ActionIcon onClick={() => window.open('https://www.facebook.com/atsuae.net', '_blank')}><FaFacebookSquare size={25} /></ActionIcon>
                                    <ActionIcon onClick={() => window.open('http://www.twitter.com/@atsuae_', '_blank')}><FaTwitter size={25} /></ActionIcon>
                                    <ActionIcon onClick={() => window.open('https://www.linkedin.com/company/advance-telematics-solutions', '_blank')}><FaLinkedin size={25} /></ActionIcon>
                            </Group>
                            </Group>
                        </Container>
                    </Container>
            </AppShell.Main>
        </AppShell>
    </motion.div>

  );
}
 
export default Layout;