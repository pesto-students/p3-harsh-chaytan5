import ShortenerInput from "./ShortenerInput";
import ShortenerResult from "./ShortenerResult";
import { StyledShortener } from "./styled/Shortener.styled";
import { useState } from "react";

export default function Shortener() {
	const [link, setLink] = useState("");
	const [longLinks, setLongLinks] = useState([]);

	return (
		<>
			<StyledShortener>
				<ShortenerInput
					link={link}
					setLink={setLink}
					setLongLinks={setLongLinks}
				/>
				{longLinks.map((value, index) => {
					return <ShortenerResult key={index} link={value} />;
				})}
			</StyledShortener>
		</>
	);
}
