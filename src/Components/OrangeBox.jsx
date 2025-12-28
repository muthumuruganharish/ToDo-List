import React, { useState } from 'react'


const OrangeBox = ({ showBox ,setShowBox }) => { 



  const handleChange=(id,value)=>{  //its like  handleChange(3, "Buy milk") first one is id 2nd one is title


    setShowBox(prev =>prev.map(

      box=> box.id===id?{...box,title:value}:box

    ))

    

  }


 
  return (
    <div>
      <div className="p-6 flex gap-4 flex-wrap">
        {showBox.map(i => (

          <div className="w-80 h-100 bg-orange-400" key={i.id}>

            <div className='flex item-center'>

              <input type="text" placeholder='Title'
                value={i.title}
                onChange={(e) =>handleChange(i.id,e.target.value)}
                className='bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 text-[27px]
                text-center' />

            </div>




          </div>
        ))}
      </div>
    </div>
  )
}

export default OrangeBox
