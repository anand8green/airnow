import React, { useState } from 'react'
import SdkContainer from './Components/SdkContainer'

const App = () => {
  const [install, setInstall] = useState(true)

  return (
    <div>
      <button onClick={() => setInstall(true)}>Installed</button>
      <button onClick={() => setInstall(false)}>UnInstalled</button>

      {install ? (
        <SdkContainer title="Installed SDK" />
      ) : (
        <SdkContainer title="UnInstalled SDK" />
      )}
    </div>
  )
}

export default App
