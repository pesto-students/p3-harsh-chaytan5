import { StyledSocialIcons } from "./styled/SociallIcons.styled";
import {FaTwitter, FaInstagram, FaPinterest, FaFacebookSquare} from 'react-icons/fa'

export default function SocialIcons() {
	return (
		<StyledSocialIcons>
			<li>
				<a href="www.facebook.com">
					<FaFacebookSquare />
				</a>
			</li>
			<li>
				<a href="www.twitter.com">
					<FaTwitter />
				</a>
			</li>
			<li>
				<a href="www.pinterest.com">
					<FaPinterest />
				</a>
			</li>
			<li>
				<a href="www.instagram.com">
					<FaInstagram />
				</a>
			</li>
		</StyledSocialIcons>
	);
}
