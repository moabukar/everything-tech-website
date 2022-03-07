import { Heading } from "@chakra-ui/react"
import logo from './../../UI/placeholder_logo.png';

export const Logo = () => {
    return (
        <>
            <img src={logo} alt="logo" />
            <Heading
                textDecor={"underline"}
                textUnderlineOffset=".2em"
                textDecorationColor={"tomato"}
                textColor="blue.100"
            >Everything Tech</Heading>
        </>
    )
}