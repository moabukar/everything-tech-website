import { Link, List, ListItem } from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { Message } from "../Message";

export const Projects: () => JSX.Element = () => {

    const { data, loading, error } = useFetch({
        url: 'https://api.github.com/repos/moabukar/Everything-Tech/contents',
        filter: (item: any) => item.type !== 'file' && !item?.name.includes('.')
    })

    if (loading) {
        return <Message message="Loading projects" />;
    }

    if (error) {
        return <Message message="Error while fetching projects" bgColor="#ff000030" color="red" />;
    }

    return (
        <List  display="flex" gap="4" flexDir="row" flexWrap="wrap" py="5" >
            {
                data?.map((project: any, index: number) =>
                    <ListItem
                        p={5}
                        m={2}
                        bgColor={"blue.700"}
                        color={"white"}
                        borderRadius={'1em'}
                        shadow='md'
                        flexGrow={1}
                        key={index}
                    >
                        <Link href={project['html_url']} fontSize={"xl"} textTransform="capitalize">{project.name.replaceAll('-', ' ')}</Link>
                        {/* <Text mt={4}>Test intro content</Text> */}
                    </ListItem>
                )
            }
        </List>
    )
}