import { useState } from "react"
import {FormDiv} from "./FormDiv/index.jsx" 
import {FincanceSection} from "./style.js"
import {Summary} from "./Summary/index.jsx"

export const Section = () => {
    const [releaseList, setReleaseList] = useState([])

    return (
        <FincanceSection>
            <FormDiv releaseList={releaseList} setReleaseList={setReleaseList}></FormDiv>
            <Summary releaseList={releaseList} setReleaseList={setReleaseList}></Summary>
        </FincanceSection>


    )

}