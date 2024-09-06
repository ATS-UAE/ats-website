import { Button, Container, Group, Text, Title, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';


export default function PageNotFound() {
   const router = useRouter()
   const theme = useMantineTheme();

   return (
      <Layout>

         <Container
         styles={{
               root: {
                  paddingTop: 80,
                  paddingBottom: 80,
                  },
               }}
         >
            <div style={{
               position: 'relative',
         }}
            >
               <Text
               styles={{
                  root: {
                     position: 'absolute',
                     top: -240,
                     right: 0,
                     left: -90,
                     zIndex: 0,
                     opacity: 0.15,
                     fontSize: 600,
                     fontWeight: 800,
                  },
               }}
               c="dimmed"
               ta="center"
               >404
               </Text>
               <div style={{
                  paddingTop: 220,
                  position: 'relative',
                  zIndex: 1,
                  }}
               >
                  <Title styles={{
                  root: {
                     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                     textAlign: 'center',
                     fontWeight: 900,
                     fontSize: 38,
                  },
                  }}
                  >Nothing to see here
                  </Title>
                  <Text
                  c="dimmed"
                  size="lg"
                  ta="center"
                  styles={{
                  root: {
                     maxWidth: 540,
                     margin: 'auto',
                     marginTop: theme.spacing.xl,
                     marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
                  } }}
                  >
                     Page you are trying to open does not exist. You may have mistyped the address, or the
                     page has been moved to another URL. If you think this is an error contact support.
                  </Text>
                  <Group justify="center">
                     <Button size="md" onClick={() => {
                        router.push('/')
                     }}>Take me back to home page</Button>
                  </Group>
               </div>
            </div>
         </Container>
      </Layout>
   );
}
