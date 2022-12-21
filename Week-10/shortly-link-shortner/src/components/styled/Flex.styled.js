import styled from "styled-components";


export const Flex = styled.div`
	display: flex;
	padding: ${({ padding }) => padding || "50px 0"};
	justify-content: space-between;
	align-items: center;
	flex-direction: ${({ direction }) => direction || "row"};
	position: relative;
	top: ${({ top }) => top};

	& h1 {
		font-size: 4.5rem;
		font-weight: 800;
		line-height: 1;
		color: ${({ theme }) => theme.colors.veryDarkBlue};
		margin-bottom: 0;
	}

	& p {
		font-size: 1.2rem;
		margin-bottom: 40px;
	}
`;