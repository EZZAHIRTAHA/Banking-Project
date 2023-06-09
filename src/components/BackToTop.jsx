import React from 'react'
import {BsArrowUp} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const BackToTop = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
  return (
    <div 
        onClick={onClick} 
        className=" fixed z-50 bottom-5 right-5 animate-pulse "
    >
        <a href='/'  className=""  >
            <BsArrowUp 
                className="text-sky-900 text-6xl cursor-pointer border-[1px] p-3 rounded-full  "
            />
        </a> 
    </div>
  )
}

export default BackToTop
