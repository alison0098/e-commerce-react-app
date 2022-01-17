import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const Slider = () => {
    return (
        <Container>
            <Arrow></Arrow>
        </Container>
    )
}

export default Slider
