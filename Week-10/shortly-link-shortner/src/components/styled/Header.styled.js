import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #fff;
    padding: 0 40px;
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
    width: 700px;
    position: relative;
    left: 110px
`