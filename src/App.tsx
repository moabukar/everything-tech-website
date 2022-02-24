import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, Link, Square, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import logo from './placeholder_logo.png';
// import './App.css';

function App() {
  return (
    <Box className="App" width={"full"} bg="brand.900"
      backgroundImage="https://images.unsplash.com/photo-1607723619307-260d7a1e1f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
      bgColor="brand.800"
      bgBlendMode={"luminosity"}
      bgAttachment={"fixed"}
    >
      {/* nav section */}
      <Center bgColor="black" p={5}>
        nav bar
        <br />
      </Center>
      {/* hero home page section */}
      <Container maxW="container.xl" p={5} py={10} h="90vh"
      //  bgColor="blackAlpha.500"
      >
        <HStack
          divider={<Divider bgColor="green" w="1%" />}
          wrap="wrap"
          // shouldWrapChildren={true}
          h="full"
        >
          <Container
            borderRadius="12px"
            bgColor="blackAlpha.700"
          >
            <Center
            // bgColor="brand.400" 
            // mixBlendMode="color-dodge" backdropFilter="sepia(1)"
            >
              <img src={logo} alt="logo" />
              <Heading
                textDecor={"underline"}
                textUnderlineOffset=".2em"
                textDecorationColor={"tomato"}
                textColor="blue.100"
              >Everything Tech</Heading>
            </Center>

            <Center
              width="100%"
              my={5}
              textColor="brand.200"
              as="p"
              bg="#03045e"
              p="4% 6%"
              borderRadius="6px"
              border="2px solid teal"
            >Helping you launch your tech career 🚀</Center>
          </Container>

          <Container
            borderRadius="12px"
            bgColor="blackAlpha.700"
            my={10}
          >
            <Center p={5} bgColor="tealAlpha.100" color="teal.300">
              <p>This is a companion website for the <Link color={"blue.100"} href="https://github.com/moabukar/Everything-Tech" isExternal>Everything-Tech repository</Link> containing a list of FREE resources, projects and hands-on exercises for you to attempt and up skill yourself so that you can find a role in your respective field. This project will be focused on those trying to enter the Tech field (like Software Engineering 👨‍💻, DevOps 🛠, Cloud 🌩, Cyber Security 🛡, Data Science/Engineering 📊, Machine Learning etc 🤖) </p>
            </Center>
            <Center
              //  mt={5}
              w="full"
              h="full"
              p={5}
            >
              <HStack
                wrap="wrap"
                w="full"
                h="full"
                divider={<Divider w="0%" h="1%" />}
              >
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
          </Container>

        </HStack>
      </Container>

      {/* search section */}

      {/* repos section */}
      {/* <Container w="full" h="full" maxW="container.xl">
        <Center><Heading as="h2" textColor="white">Categories</Heading></Center>
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

      {/* contributors section */}
    </Box>
  );
}

export default App;
