import { useState } from 'react'

import {Header} from "./components/Header/index.jsx" 
import { GlobalStyle } from './styles/globalStyle'
import { Section } from './components/Section/index.jsx'

const App = () => {


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
