import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 2rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.veryDarkViolet};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & img{
        margin: 2rem 5rem;
    }

    ul{
        list-style-type:none;
    }

    ul li{
        font-size: 1rem;
        opacity: 0.80;
        margin-bottom: 1rem;
        transition: 0.2s ease;
        cursor:pointer;
        &:hover{
            color: ${({theme}) => theme.colors.cyan};
        }
    }
`