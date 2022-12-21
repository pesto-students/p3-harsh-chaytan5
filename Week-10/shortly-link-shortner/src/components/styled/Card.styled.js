import styled from "styled-components";

export const StyledCard = styled.div`
    max-width: 400px;
    background-color: #fff;
    border-radius: 10px;
    text-align: left;
    padding: 3rem 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 100px;

    & h2{
        margin-top: 30px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.veryDarkBlue}
    }

    & p{
        font-size: 1rem;
        margin-bottom: 0;
    }
    
`

export const Img = styled.div`
        background-color: ${({ theme }) => theme.colors.darkViolet};
        border-radius: 50%;
        width: 90px;
        height: 90px;
        position: relative;
        top: 35px;

        & > img{
        padding: 1.2rem;
        width: 100%;
        height: 100%;
        }
`    