import SocialIcons from "./SocialIcons";
import { Flex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";


export default function Footer() {
    return <StyledFooter>
        <div>
            <img src="./images/logo-white.svg" alt="Shortly Logo" />
        </div>


        <ul>
            <h4>Features</h4>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
        </ul>

        <ul>
            <h4>Resources</h4>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
        </ul>

        <ul>
            <h4>Company</h4>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>

        <SocialIcons />


    </StyledFooter>
}