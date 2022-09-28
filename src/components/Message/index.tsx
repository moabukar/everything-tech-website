import { Box } from "@chakra-ui/react";

interface Props {
    message: string;
    color?: string;
    bgColor?: string;
}

export const Message: (props: Props) => JSX.Element = ({ message, color = "blue", bgColor }) => {

    return (
        <Box as={"div"}
            p="1em"
            pl="0.6em"
            borderLeft={`0.4em solid ${color}`}
            background={bgColor ?? "rgba(0, 0, 255, 0.19)"}
            color={color}
            margin="1em 0"
        >
            {message}
        </Box>
    )
}