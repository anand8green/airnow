import React from 'react'

const SdkContainer = ({ title, totalSdk, latestUpdate, data }) => {
  console.log(data)

  return (
    <div>
      <h1>{title}</h1>
      <h3>{totalSdk}</h3>
      <p>{latestUpdate}</p>
    </div>
  )
}

export default SdkContainer
