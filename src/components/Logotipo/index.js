import styled from "styled-components"

const Logo = styled.span`
    font-size: 40px;
    font-weight: 600; 
    flex-basis: 36%; 
`

function Logotipo() {
    return(
        <Logo>
            <img src="/images/logo.png" alt="Logo tipo Sablecard"/>
        </Logo>
    )
}

export default Logotipo;