import React from 'react'
import Header from './Components/Header'
import OrangeBox from './Components/OrangeBox'
import { useState } from 'react'
const App = () => {
    const [showBox, setShowBox] = useState([]);
  return (
    <div>

      <Header setShowBox={setShowBox} />
<OrangeBox showBox={showBox} setShowBox={setShowBox} />

    </div>
  )
}

export default App
