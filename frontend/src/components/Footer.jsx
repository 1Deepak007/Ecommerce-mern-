import React from 'react'
import Logo from '../assets/Logo.jpg'

const Footer = () => {
  return (
    <>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={Logo} alt="logo here" className='w-16'/>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem officia porro cupiditate tenetur nobis quod molestias illo quidem maiores earum a reiciendis reprehenderit numquam assumenda suscipit, eaque nostrum facilis inventore ab quaerat? Officia, iusto.</p>
            </div>
            <div>
                <p className="text-xl font-mediun mb-5">Company</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>Abut Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-mediun mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-9876543210</li>
                    <li>shopbag@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright @ 2025. All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer