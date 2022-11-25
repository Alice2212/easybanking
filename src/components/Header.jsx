import {React, useState} from 'react'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isActive, setIsActive] = useState(true)
    const handleClick = (event) => {
      setIsActive((current) => !current);
    }
  return (
   <header className='max-w-[80%] relative mx-auto max-[600px]:max-w-[90%] flex justify-between py-8'>
    <div>
      <img src={Logo}  alt="Logo" />
    </div>
<ul className='flex text-lg font-medium text-gray  max-[786px]:hidden'>
  <li>Home</li>
  <li className='mx-8'>About</li>
  <li>Contact</li>
  <li  className='mx-8'>Blog</li>
  <li>Careers</li>
</ul>
<ul className={isActive ? "block bg-[#ffffff] absolute top-[7rem] w-[90%] mx-auto py-8 text-xl font-medium z-20 rounded-md text-center" : "hidden"}>
  <li>Home</li>
  <li className='my-8'>About</li>
  <li>Contact</li>
  <li  className='my-8'>Blog</li>
  <li>Careers</li>
</ul>
<div>
  <button className='bg-gradient-to-r from-green to-cyan max-[910px]:hidden p-2 text-[#ffffff] text-lg w-40 rounded-full max-[786px]:hidden'>Request Invite</button>
  <FontAwesomeIcon icon={faBars} className="lg:hidden md:hidden"  size="2x" onClick={handleClick} /> 
</div>

   </header>
  )
}

export default Header