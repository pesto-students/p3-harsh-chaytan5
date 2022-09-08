import ShortenerInput from "./ShortenerInput";
import ShortenerResult from "./ShortenerResult";
import { StyledShortener } from "./styled/Shortener.styled";


export default function Shortener() {
    return <>
        <StyledShortener>
            <ShortenerInput />
            <ShortenerResult />
            <ShortenerResult />
            <ShortenerResult />
        </StyledShortener>
    </>
}