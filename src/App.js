import SectionHeader from "./components/Header"
import SectionCall from "./components/CallMkt"
import SectionCardBlack from "./components/SectionCardBlack"
import SectionCardWhite from "./components/SectionCardWhite"
import SectionCashback from "./components/SectionCashback"
import SectionCompare from "./components/SectionCompare"

function App() {
    return (
        <>
            <SectionHeader />
            <SectionCall />
            <SectionCardBlack />
            <SectionCardWhite />
            <SectionCashback />
            <SectionCompare />
        </>
    );
}

export default App;
