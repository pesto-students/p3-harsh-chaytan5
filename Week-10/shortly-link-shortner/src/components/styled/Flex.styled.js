import styled from "styled-components";


export const Flex = styled.div`

    display: flex;
    padding: 50px 0;

    & h1{
        font-size: 4.5rem;
        font-weight: 800;
        line-height: 1;
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        margin-bottom: 0;
    }

    & p{
        font-size: 1.3rem;
        margin-bottom: 40px;
    }
`