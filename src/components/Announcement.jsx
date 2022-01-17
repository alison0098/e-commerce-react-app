import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #009B77;
    color: white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size: 16px;
    font-weight: 500;

`

const Announcement = () => {
    return (
        <Container>
            Frete Grátis para todo Brasil a partir de R$99!
        </Container>
    )
}

export default Announcement

