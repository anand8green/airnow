import React from 'react'
import SdkUnit from './SdkUnit'

const SdkContainer = ({ title, totalSdk, latestUpdate, data }) => {
  console.log(data)

  return (
    <div className="container">
      <div className="titleBar">
        <div>
          <h1 className="title" aria-label="title">
            {title}
          </h1>
          <p>Latest Update: {latestUpdate}</p>
        </div>
        <span className="number">{totalSdk}</span>
      </div>
      <hr className="hr" />
      <div className="contentBar">
        {Object.entries(data).map((item, i) => {
          return <SdkUnit key={i} title={item[0]} data={item[1]} />
        })}
      </div>
    </div>
  )
}

export default SdkContainer
