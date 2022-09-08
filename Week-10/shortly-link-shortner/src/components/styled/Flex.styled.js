import styled from "styled-components";


export const Flex = styled.div`

    display: flex;
    padding:${({ padding }) => padding || '50px 0'}  ;
    justify-content: space-between;
    align-items: center;
    & h1{
        font-size: 4.5rem;
        font-weight: 800;
        line-height: 1;
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        margin-bottom: 0;
    }

    & p{
        font-size: 1.2rem;
        margin-bottom: 40px;
        
    }

    & a{
        text-decoration: none;
        font-size: 1.3rem;
        padding: 1rem;
    }

    & .og-link{
        flex-grow: 1;
        color: ${({theme}) => theme.colors.veryDarkBlue};
    }

    & .result-link{
        color: ${({theme}) => theme.colors.cyan};
    }
`