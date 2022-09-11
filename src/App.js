import React, { useState } from 'react'
import SdkContainer from './Components/SdkContainer'
import installedData from './JSON/installed.json'
import unInstallData from './JSON/uninstalled.json'

const App = () => {
  const [installed, setInstalled] = useState(true)
  const [instData] = useState(installedData?.data?.installedSdks)
  const [unInstData] = useState(unInstallData?.data?.uninstalledSdks)

  // Creating group based on categories
  const groupDataFunction = (data) => {
    return data.reduce((acc, cu) => {
      const { categories } = cu
      acc[categories] = acc[categories] ?? []
      acc[categories].push(cu)
      return acc
    }, {})
  }

  // Getting latest update
  const getLatestUpdate = (array) => {
    return array
      .map((item) => new Date(item.lastSeenDate))
      .sort((a, b) => b - a)[0]
      .toDateString()
  }

  return (
    <div>
      <button
        className={`installedBtn ${installed && 'activeBtn'}`}
        onClick={() => setInstalled(true)}
      >
        Installed
      </button>
      <button
        className={`unInstalledBtn ${!installed && 'activeBtn'}`}
        onClick={() => setInstalled(false)}
      >
        Uninstalled
      </button>

      {installed ? (
        <SdkContainer
          title="Installed SDK"
          totalSdk={instData.length}
          latestUpdate={getLatestUpdate(instData)}
          data={groupDataFunction(instData)}
        />
      ) : (
        <SdkContainer
          title="UnInstalled SDK"
          totalSdk={unInstData.length}
          latestUpdate={getLatestUpdate(unInstData)}
          data={groupDataFunction(unInstData)}
        />
      )}
    </div>
  )
}

export default App
