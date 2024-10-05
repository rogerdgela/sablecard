import styled from "styled-components"

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 366px;
    height: 326px;
    color: #fff;
    margin-top: -150px;
`

const DivText = styled.div`
    font-size: 38px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 3px;

    span {
        font-weight: 700;
    }
`

const BotaoExplore = styled.button`
    width: 160px;
    height: 80px;
    border: none;
    border-radius: 154px;
    background: #6FDBD4;
    margin-top: 40px;
    font-weight: 700;
    cursor: pointer;
`

function ContentText() {
    return (
        <DivMain>
            <DivText>
                <p>The fastest, most premium path to <span>financial freedom</span></p>
            </DivText>

            <BotaoExplore>EXPLORE</BotaoExplore>
        </DivMain>
    )
}

export default ContentText