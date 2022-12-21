import styled from "styled-components";

export const StyledContent = styled.div`
    
    width: 85%;
    margin: 0 auto;

    &>div{
        text-align: center;


        &>h1{
            font-size: 3rem;
            font-weight: 800;
            margin: 10px auto;
            color: ${({theme}) => theme.colors.veryDarkBlue};
        }

        &>p{
            font-size: 1.2rem;
            max-width: 500px;
            margin: 0 auto;
        }
    }
`