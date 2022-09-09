import { Button } from "./styled/Button.styled";
import { StyledShortenerInput } from "./styled/ShortenerInput.styled";

export default function ShortenerInput({ link, setLink, setLongLinks }) {
	function onClickHandler(event) {
		event.preventDefault();
		console.log(`link is : ${link}`);
		setLongLinks((oldLinks) => {
			setLink("");
			return [link, ...oldLinks];
		});
	}

	return (
		<StyledShortenerInput>
			<form onSubmit={onClickHandler}>
				<input
					type="url"
					placeholder="Shorten a link here..."
					value={link}
					required
					onChange={(event) => setLink(event.target.value)}
				/>
				<Button type="submit" borderRadius="7px" fontSize="1.2rem">
					Shorten It!
				</Button>
			</form>
		</StyledShortenerInput>
	);
}
