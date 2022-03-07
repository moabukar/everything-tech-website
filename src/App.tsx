import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, Link, Square, Stack, Text } from '@chakra-ui/react';
import { BrandMagnet } from './components/BrandMagnet/Index';
import { Logo } from './components/Logo';
import { ProjectCard } from './components/Project';
import { Projects } from './components/Project/projects';

function App() {
  return (

    <Box className="App" width={"full"}
      // backgroundImage="https://images.unsplash.com/photo-1607723619307-260d7a1e1f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
      backgroundImage="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
      bgColor="brand.800"
      bgBlendMode={"luminosity"}
      bgAttachment={"scroll"}
      bgPos={"center"}
      bgSize={"cover"}
      h="100vh"
    >

      {/* nav section */}
      <Center bgColor="black" p={5}>
        nav bar
        <br />
      </Center>

      {/* hero home page section */}
      <Container maxW="container.xl" p={5} py={10} h="90vh" minH={"fit-content"}>
        <HStack
          // divider={<Divider bgColor="green" w="1%" />}
          wrap="wrap"
          h="full"
        >
          <Container
            borderRadius="12px"
            bgColor="blackAlpha.700"
            p={5}
            fontSize={20}
            boxShadow="2px 2px 12px #2bff00"
            >
            <Center>
              <Logo />
            </Center>

            <BrandMagnet />

          </Container>

          {/* <Container borderRadius="12px" bgColor="blackAlpha.700" my={10}>

             <Center p={5} bgColor="tealAlpha.100" color="teal.300">
              <p>This is a companion website for the <Link color={"blue.100"} href="https://github.com/moabukar/Everything-Tech" isExternal>Everything-Tech repository</Link> containing a list of FREE resources, projects and hands-on exercises for you to attempt and up skill yourself so that you can find a role in your respective field. This project will be focused on those trying to enter the Tech field (like Software Engineering 👨‍💻, DevOps 🛠, Cloud 🌩, Cyber Security 🛡, Data Science/Engineering 📊, Machine Learning etc 🤖) </p>
            </Center> 

            <Center w="full" h="full" p={5}>
              <HStack wrap="wrap" w="full" h="full" divider={<Divider w="0%" h="1%" />}>
                <Button as={Link}
                  colorScheme="cyan" href="https://github.com/moabukar/Everything-Tech" isExternal
                  px={50} py={5}
                  w="full"
                >Learn Now</Button>

                <Button as={Link} href="https://github.com/moabukar/Everything-Tech" isExternal
                  colorScheme="green"
                  mt={5}
                  w="full"
                  px={50} py={5}
                >Contribute</Button>
              </HStack>
            </Center>
          </Container> */}

        </HStack>

      </Container>
      <div style={{ position: "relative" }}>
        {/* "borrowed" from miukimiu */}
        <svg
          style={{
            position: "absolute",
            top: "-38px",
            left: "0px",
            width: "100%",
            height: "50px"
          }}
          width="full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 829 60"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path fill="#03045E" fillRule="evenodd"
            d="M0,23.9290015 C206.010417,8.05185466 366.010417,0.11328125 480,0.11328125 C593.989583,0.11328125 710.322917,8.05185466 829,23.9290015 L829,60 L0,60 L0,23.9290015 Z">
          </path>
        </svg></div>

      {/* search section */}

      {/* Category section */}
      {/* <Container w="full" h="full" p={12} maxW="container.xl">
        <Center><Heading as="h2" textColor="blue">Categories</Heading></Center>
        <Flex justify={"center"} wrap="wrap" w="full" h="full">
          <Square m={10} size={"250px"} bgColor={"teal.200"} border="3px solid teal" fontSize="6xl" fontWeight={"700"}>
            <Text>Linux</Text>
          </Square>
          <Square m={10} size={"250px"} bgColor={"teal.200"} border="3px solid teal" fontSize="6xl" fontWeight={"700"}>
            <Text>Linux</Text>
          </Square>
          <Square m={10} size={"250px"} bgColor={"teal.200"} border="3px solid teal" fontSize="6xl" fontWeight={"700"}>
            <Text>Linux</Text>
          </Square>
          <Square m={10} size={"250px"} bgColor={"teal.200"} border="3px solid teal" fontSize="6xl" fontWeight={"700"}>
            <Text>Linux</Text>
          </Square>
          <Square m={10} size={"250px"} bgColor={"teal.200"} border="3px solid teal" fontSize="6xl" fontWeight={"700"}>
            <Text>Linux</Text>
          </Square>
        </Flex>
      </Container> */}

      {/* Repositories */}
      <Container w="full" h="full" p={12} maxW="container.xl">
        <Center><Heading as="h2" textColor="blue">Explore</Heading></Center>
        <Flex justify={"center"} wrap="wrap" w="full" h="full" p={5}>
          <Projects />
        </Flex>
      </Container>

      {/* contributors section */}
    </Box>
  );
}

export default App;
