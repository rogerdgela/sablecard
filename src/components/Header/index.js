import styled from "styled-components";

const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 810px;
`

const HeaderTeste = styled.div`
    display: flex;
    justify-content: center;
    width: 1224px;
    height: 810px;
    background-image: url('/images/background-header.png');
`

function HeaderComponents() {
    return (
        <HeaderMain>
            <HeaderTeste>

            </HeaderTeste>
        </HeaderMain>
    )
}

export default HeaderComponents;