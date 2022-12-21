import { StyledShortenerResult } from "./styled/ShortenerResult.styled";
import { Button } from "./styled/Button.styled";
import { useEffect, useState } from "react";

export default function ShortenerResult({ link }) {
	const [shortLink, setShortLink] = useState("");
	const [copy, setCopy] = useState(false);

	async function getShortLink(longLink) {
		try {
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${longLink}`
			);
			return await res.json();
		} catch (e) {
			return alert(`some error occured. error code: ${e}`);
		}
	}

	useEffect(() => {
		async function handler(link) {
			let data = await getShortLink(link);
			setShortLink(data.result.full_short_link);
		}
		if (link.length) {
			handler(link);
		}
	}, [link]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopy(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, [copy]);

	let displayLink;
	if (link.length > 95) {
		displayLink = link.slice(0, 95) + "...";
	} else {
		displayLink = link;
	}

	return (
		<StyledShortenerResult>
			<div className="og-link">
				<a href={link}>{displayLink}</a>
			</div>
			<div className="result-link">
				<a href={shortLink}>{shortLink}</a>
			</div>
			<Button
				className={copy && "copied"}
				borderRadius="7px"
				padding=" 0.7rem 2rem"
				onClick={() => {
					setCopy(true);
					navigator.clipboard.writeText(shortLink);
				}}
			>
				{copy ? "Copied" : "Copy"}
			</Button>
		</StyledShortenerResult>
	);
}
