import React from 'react'

const OrangeBox = ({showBox}) => {
  return (
    <div>
        <div className="p-6 flex gap-4 flex-wrap">
      {showBox.map(i=>(
        <div className="w-40 h-40 bg-orange-500" key={i.id}></div>
      ))}
    </div>
    </div>
  )
}

export default OrangeBox
