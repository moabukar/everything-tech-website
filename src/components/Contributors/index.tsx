
import { Img, Link, List, ListItem } from "@chakra-ui/react";
import { useFetch } from "../../hooks/useFetch";
import { Message } from "../Message";

export const Contributors = (): JSX.Element => {

    const url: string = 'https://api.github.com/repos/moabukar/Everything-Tech/contributors';

    const { data, loading, error } = useFetch({ url });

    if (loading && !error) {
        return <Message message="Loading contributors" />;
    }

    if (error) {
        return <Message message="Error while fetching contributors" bgColor="#ff000030" color="red" />;
    }

    return (
        <List display="flex" gap="4" flexDir="row" flexWrap="wrap" py="5" >
            {
                data?.map((c: any, index: number) => {
                    return (
                        <ListItem
                            key={index}
                            width={'10em'}
                            color="green.900"
                        >
                            <Link href={c.html_url}>
                                <Img src={c.avatar_url} alt={"Avatar of contributor " + c.login} borderRadius={"1em"} />
                                <div>@{c.login}</div>
                            </Link>
                        </ListItem>
                    )
                })

            }
        </List>
    )
}