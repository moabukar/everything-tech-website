import { Heading } from "@chakra-ui/react"
import logo from './../../UI/placeholder_logo.png';

export const Logo: () => JSX.Element = () => {
    return (
        <>
            <img src={logo} alt="Site logo" />
            <Heading as={'div'}
                textDecor={"underline"}
                textUnderlineOffset=".2em"
                textDecorationColor={"tomato"}
                textColor="blue.100"
            >Everything Tech</Heading>
        </>
    )
}