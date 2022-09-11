import React, { useState } from 'react'
import SdkContainer from './Components/SdkContainer'
import installedData from './JSON/installed.json'
import unInstallData from './JSON/uninstalled.json'

const App = () => {
  const [install, setInstall] = useState(true)
  const [instData] = useState(installedData?.data?.installedSdks)
  const [unInstData] = useState(unInstallData?.data?.uninstalledSdks)

  // Getting latest update
  const getLatestUpdate = (array) => {
    return array
      .map((item) => new Date(item.lastSeenDate))
      .sort((a, b) => b - a)[0]
      .toDateString()
  }

  return (
    <div>
      <button onClick={() => setInstall(true)}>Installed</button>
      <button onClick={() => setInstall(false)}>UnInstalled</button>

      {install ? (
        <SdkContainer
          title="Installed SDK"
          totalSdk={instData.length}
          latestUpdate={getLatestUpdate(instData)}
        />
      ) : (
        <SdkContainer
          title="UnInstalled SDK"
          totalSdk={unInstData.length}
          latestUpdate={getLatestUpdate(unInstData)}
        />
      )}
    </div>
  )
}

export default App
