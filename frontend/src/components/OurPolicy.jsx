import React from 'react'
import { FaExchangeAlt } from 'react-icons/fa'

const OurPolicy = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <h2>Policy</h2>
            <div>
                <FaExchangeAlt />
            </div>
        </div>
    </div>
  )
}

export default OurPolicy