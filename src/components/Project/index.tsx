import { Heading, Box, Container, Center, Square, Flex } from "@chakra-ui/react"

export const ProjectCard = ({ project }: any) => {

    return (
        <Square
            minWidth={"fit-content"}
            maxWidth={"fit-content"}
            m={5} p={2}
            bgColor={"teal.200"}
            border="3px solid teal"
            fontSize="4xl"
            flexWrap={"wrap"}
            fontWeight={"700"}>
            {project.name.replaceAll('-', ' ')}
        </Square>
    )
}