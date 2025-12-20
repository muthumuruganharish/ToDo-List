import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <div className='bg-orange-400'>

            <div className='pl-3 pt-3 pb-3 flex justify-between' >

                <h1 className='text-white text-[22px]'>TO-DO</h1>

               <FontAwesomeIcon icon={faPlus} className="text-xl text-amber-50 pr-3
                    pt-3 pb-3" />


            </div>




        </div>
    )
}

export default Header
