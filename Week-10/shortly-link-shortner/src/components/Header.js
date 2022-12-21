import { StyledHeader, Nav, Logo, Img } from "./styled/Header.styled"
import { Button } from "./styled/Button.styled"
import { Flex } from "./styled/Flex.styled"

export default function Header() {
    return <>
        <StyledHeader>
            <Nav>
                <Logo src="./images/logo.svg" alt="shortly logo" />
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <div>
                    <Button bg='#fff' color="hsl(257, 7%, 63%)">Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </Nav>
            <Flex>
                <div>
                    <h1>More than just shorter links</h1>
                    <p>Build you brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button margin = '0' fontSize = '1.5rem'>Get Started</Button>
                </div>
                <Img src="./images/illustration-working.svg" alt="working lady  " />
            </Flex>
        </StyledHeader>
    </>
}