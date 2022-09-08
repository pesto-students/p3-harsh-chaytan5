import styled from "styled-components";


export const StyledBanner = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    background-image: url('./images/bg-boost-desktop.svg');
    /* background-repeat: no-repeat; */
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`