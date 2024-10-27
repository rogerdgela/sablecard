import SectionHeader from "./components/Header"
import SectionCall from "./components/CallMkt"
import SectionCardBlack from "./components/SectionCardBlack"
import SectionCardWhite from "./components/SectionCardWhite"
import SectionCashback from "./components/SectionCashback"
import SectionCompare from "./components/SectionCompare"
import SectionTestimonials from "./components/SectionTestimonials"
import SectionApps from "./components/SectionApps"

function App() {
    return (
        <>
            <SectionHeader />
            <SectionCall />
            <SectionCardBlack />
            <SectionCardWhite />
            <SectionCashback />
            <SectionCompare />
            <SectionTestimonials />
            <SectionApps />
        </>
    );
}

export default App;
