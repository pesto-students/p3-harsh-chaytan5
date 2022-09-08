import { Button } from "./styled/Button.styled"
import { StyledShortenerInput } from "./styled/ShortenerInput.styled"

export default function ShortenerInput() {
    return (
        <StyledShortenerInput>
            <form>
                <input type="link" placeholder="Shorten a link here..." required />
                <Button borderRadius='7px' fontSize='1.2rem'>Shorten It!</Button>
            </form>
        </StyledShortenerInput>)
}