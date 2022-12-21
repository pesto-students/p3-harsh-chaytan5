import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #fff;
    padding: 0 100px 70px;
    overflow: hidden;
    `;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    

    & > ul {
        list-style: none;
        display: flex;
        flex-grow: 1;
        color: hsl(257, 7%, 63%);

        & > li {
        font-size: 1rem;
        margin: 1rem;
        cursor: pointer;
        font-weight: bold;
        transition: 0.2s all ease;

            &:hover {
                color: ${({ theme }) => theme.colors.veryDarkViolet};
            }
        }
    }
`

export const Logo = styled.img`
    width: 120px;
    cursor: pointer;

`

export const Img = styled.img`
    width: 650px;
    position: relative;
    left: 200px;
    
`