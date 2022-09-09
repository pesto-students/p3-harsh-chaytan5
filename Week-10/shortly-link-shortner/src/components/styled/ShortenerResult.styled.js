import styled from "styled-components";

export const StyledShortenerResult = styled.div`
	width: 100%;
	background-color: #fff;
	margin: 20px auto;
	border-radius: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	& .og-link {
		flex-grow: 1;
		flex-wrap: wrap;
		/* background-color: blanchedalmond; */
	}

	& a {
		text-decoration: none;
	}

	& .og-link > a {
		color: ${({ theme }) => theme.colors.veryDarkBlue};
	}
	& div {
		padding: 1rem;
	}

	& .result-link > a {
		color: ${({ theme }) => theme.colors.cyan};
	}

	& .copied {
		background-color: ${({ theme }) => theme.colors.darkViolet};
	}
`;
