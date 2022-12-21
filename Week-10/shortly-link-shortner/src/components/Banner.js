import { StyledBanner } from "./styled/Banner.styled";
import { Button } from "./styled/Button.styled";


export default function Banner() {
    return <StyledBanner>
        <h1>Boost your links today</h1>
        <Button fontSize = '1.5rem'>Get Started</Button>
    </StyledBanner>
}