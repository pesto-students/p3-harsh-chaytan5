import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    
	display: flex;
	align-items: center;
    justify-content: center;
	margin: 1.5rem 1rem;

	li {
		list-style-type: none;
		margin: 1rem;
        font-size: 2rem;
	}

    a{
        text-decoration: none;
        color: #fff;
        transition: 0.2s ease;
        &:hover{
            color: ${({theme}) => theme.colors.cyan};
        }
    } 
`;
