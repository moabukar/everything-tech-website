import { Box, Button, ButtonGroup, Center, Container, Flex, Heading, HStack, Img, Link } from '@chakra-ui/react';
import { BrandMagnet } from './components/BrandMagnet/Index';
import { Contributors } from './components/Contributors';
import { Logo } from './components/Logo';
import { Projects } from './components/Projects';

//TODO: Clean up to reduce inline styles

function App() {
  return (

    <Box as={'main'} className="App" width={"full"}
      // backgroundImage="https://images.unsplash.com/photo-1607723619307-260d7a1e1f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
      // backgroundImage="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
      bgColor="brand.800"
      bgBlendMode={"luminosity"}
      bgAttachment={"scroll"}
      bgPos={"center"}
      bgSize={"cover"}
      paddingBottom='2em'
      h="100%"
      backgroundImage={"linear-gradient(45deg, #07ffe459, #70ff3763), linear-gradient(45deg, #7b148f, #c526269c), linear-gradient(45deg, black, #c303ff91);"}
    >

      {/* nav section */}
      <Flex p='4' justify={'right'}>
        <Button as={Link} href="https://github.com/moabukar/everything-tech" colorScheme='orange'
          leftIcon={
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          }
        >
          <span>Explore on Github</span>
        </Button>
      </Flex>

      {/* Banner */}
      <Container maxW="container.xl" h="87vh">
        <HStack h="full">
          <Container
            borderRadius="12px"
            bgColor="blackAlpha.700"
            p={5}
            fontSize={20}
            boxShadow="2px 2px 12px #2bff00"
          >
            <Center flexWrap={'wrap'}>
              <Logo />
            </Center>

            <BrandMagnet />

          </Container>
        </HStack>
      </Container>

      <Flex flexDir={'column'} gap="8" m="2">

        {/* Roadmap */}
        <Container as={'section'} w="full" h="full" p={'1.5em'} maxW="container.xl" bgColor="white" borderRadius={'1em'}>
          <Heading as="h2" marginBottom="6" textColor="brand.700">Roadmap</Heading>

          {/* TODO: Perhaps add intro text here, or update the roadmap to be accurate and overlay the image with map / turn to SVG */}

          {/* <Box as={'p'}>
            This is a companion website for the <Link color={"blue.700"} href="https://github.com/moabukar/Everything-Tech" isExternal>Everything-Tech repository</Link> containing a list of FREE resources, projects and hands-on exercises for you to attempt and up skill yourself so that you can find a role in your respective field. This project will be focused on those trying to enter the Tech field (like Software Engineering 👨‍💻, DevOps 🛠, Cloud 🌩, Cyber Security 🛡, Data Science/Engineering 📊, Machine Learning etc 🤖)
          </Box>
          <ButtonGroup gap='2' mt={'1em'}>
            <Button as={Link}
              colorScheme="cyan" href="https://github.com/moabukar/Everything-Tech" isExternal
              px={50} py={5}
            >Learn Now</Button>
            <Button as={Link} href="https://github.com/moabukar/Everything-Tech" isExternal
              colorScheme="green"
              px={50} py={5}
            >Contribute</Button>
          </ButtonGroup> */}

          <Box
            p={0}
            m={0}
            bgColor={"grey"}
            color={"white"}
            border="0.5em solid"
            shadow='md'
            minHeight={'10em'}
          >
            <Img
              src={"https://raw.githubusercontent.com/moabukar/Everything-Tech/main/roadmap.jpeg"}
              alt={"Roadmap of technology tools - languages, libraries, frameworks & infrastructure / platforms"}
            />
          </Box>
        </Container>

        {/* Learning resources */}
        <Container as={'section'} w="full" h="full" p={'1.5em'} maxW="container.xl" bgColor="white" borderRadius={'1em'}>
          <Heading as="h2" textColor="brand.700">Learning resources</Heading>
          <Projects />
        </Container>

        {/* Contributors section */}
        <Container as={'section'} w="full" h="full" p={'1.5em'} maxW="container.xl" bgColor="white" borderRadius={'1em'}>
          <Flex gap={6} align="center" wrap={"wrap"}>
            <Heading as="h2" textColor="brand.700">Contributors</Heading>

            <Button
              as={Link}
              href="https://github.com/moabukar/everything-tech/pulls"
              colorScheme='green'
              leftIcon={
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              }>
              <span>Join the list</span>
            </Button>
          </Flex>
          <Contributors />
        </Container>
      </Flex>

    </Box>
  );
}

export default App;
