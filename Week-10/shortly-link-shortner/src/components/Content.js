import Card from "./Card";
import { StyledContent } from "./styled/Content.styled";
import { Flex } from "./styled/Flex.styled";
import { cardContent } from "../CardContent";

export default function Content() {
    return (
        <StyledContent>
            <div>
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <Flex>
                <Card item={cardContent.first} />
                <Card item={cardContent.second} top='40px' />
                <Card item={cardContent.third} top='80px' />

            </Flex>
        </StyledContent>)
}