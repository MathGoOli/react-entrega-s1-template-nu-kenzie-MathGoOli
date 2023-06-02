import { useState } from 'react'

import {Header} from "./components/Header/index.jsx" 
import { GlobalStyle } from './styles/globalStyle'
import { Section } from './components/section/index.jsx'
import { HeaderTitle1, HeaderTitle2, HeaderTitle3, HeaderTitle4, TextCaption } from "./styles/titles.js"

function App() {


  return (
    <>
    <GlobalStyle/>
      <Header></Header>
      <main>
        <Section></Section>

      </main>
      
    </>
  )
}

export default App
