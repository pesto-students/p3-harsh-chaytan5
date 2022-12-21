import styled from "styled-components";

export const Button = styled.button`
	border: 0;
	padding: ${({ padding }) => padding || "0.7rem 1.5rem"};
	margin: ${({ margin }) => margin || "1rem"};
	font-weight: bold;
	font-size: ${({ fontSize }) => fontSize || "1rem"};
	border-radius: ${({ borderRadius }) => borderRadius || "25px"};
	background-color: ${({ bg }) => bg || "#29d1d1"};
	color: ${({ color }) => color || "#fff"};
	transition: 0.2s all ease-in;
	cursor: pointer;

	&:hover {
		opacity: 0.75;
	}
`;
