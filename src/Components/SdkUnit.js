import React from 'react'

const SdkUnit = ({ title, data }) => {
  return (
    <div className="unit">
      <h2>{title}</h2>
      {data?.map((item) => {
        const lastSeen =
          new Date().getFullYear() - new Date(item.lastSeenDate).getFullYear()
        return (
          <div className="unitSDK" key={item.id}>
            <h4 className="sdkName">{item.name}</h4>
            <p>{lastSeen} years ago</p>
          </div>
        )
      })}
    </div>
  )
}

export default SdkUnit
