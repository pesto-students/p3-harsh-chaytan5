import { Img, StyledCard } from "./styled/Card.styled";
import { Flex } from "./styled/Flex.styled";


export default function Card({ top, item }) {
    return (
        <Flex direction='column' padding='0' top={top}>
            <Img className="img-container">
                <img src={`./images/${item.image}`} alt="description"/>
            </Img>

            <StyledCard>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>

            </StyledCard>
        </Flex>
    )
}