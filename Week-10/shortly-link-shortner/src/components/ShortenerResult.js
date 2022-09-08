import { Flex } from "./styled/Flex.styled";
import { StyledShortenerResult } from "./styled/ShortenerResult.styled";
import { Button } from "./styled/Button.styled";

export default function ShortenerResult() {
    return (
        <StyledShortenerResult>
            <Flex padding= '5px'>
                <a className="og-link" href="#">example link</a>
                <a className="result-link" href="#">Short link</a>
                <Button borderRadius= '7px' padding = ' 0.7rem 2rem'>Copy</Button>
            </Flex>
        </StyledShortenerResult>) 
}