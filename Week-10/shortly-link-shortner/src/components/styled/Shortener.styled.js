import styled from "styled-components";

export const StyledShortener = styled.div`
    width: 90%;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    background-image: url('./images/bg-shorten-desktop.svg');
    margin: 20px auto;
    border-radius: 10px;

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