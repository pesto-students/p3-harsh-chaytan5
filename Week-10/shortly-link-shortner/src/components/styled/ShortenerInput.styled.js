import styled from "styled-components";

export const StyledShortenerInput = styled.div`
    background-color: ${({ theme }) => theme.colors.darkViolet};
    background-image: url('./images/bg-shorten-desktop.svg');
    border-radius: 10px;
    margin: 20px auto;
    & > form{
        padding: 1.5rem; 
        display: flex;
        & > input{
            flex-grow: 1;
            padding: 1rem;
            border-radius: 7px;
            font-size: 1.5rem;
            margin: 1rem 0.2rem 1rem 1rem;
        }
    }
`