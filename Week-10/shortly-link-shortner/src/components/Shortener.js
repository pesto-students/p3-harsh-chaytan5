import { Button } from "./styled/Button.styled";
import { StyledShortener } from "./styled/Shortener.styled";


export default function Shortener() {
    return <StyledShortener>
        <form action="">
            <input type="link" placeholder="Shorten a link here..." />
            <Button borderRadius= '7px' fontSize= '1.2rem'>Shorten It!</Button>
        </form>
    </StyledShortener>
}