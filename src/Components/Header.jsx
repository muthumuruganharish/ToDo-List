import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { text } from '@fortawesome/fontawesome-svg-core';


const Header = ({ setShowBox }) => {
    return (
        <div className='bg-orange-400'>

            <div className='pl-3 pt-3 pb-3 flex justify-between' >

                <h1 className='text-white text-[22px]'>TO-DO</h1>

                <button
                    className="cursor-pointer text-amber-50 text-[33px] mr-3"
                    onClick={() => setShowBox(prev => [...prev, { 
                        id: Date.now() , //Date is used to create a unique ID
                        title:"",
                        task:[{
                            id:Date.now(),text:"",completed:false
                        }],
                        

                    }])}
                >
                    +
                </button>




            </div>




        </div>
    )
}

export default Header
