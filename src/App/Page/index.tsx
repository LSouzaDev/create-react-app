import styled from "styled-components"

export default function index() {
    return(
        <Container>
            <WelcomeMessage>Hello World</WelcomeMessage>
        </Container>
    )
}


const Container = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const WelcomeMessage = styled.h1``;
