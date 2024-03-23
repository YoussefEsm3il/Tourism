import React, { Fragment, useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";




const DarkToLight = () => {
    const [theme,setTheme]= useState(
        localStorage.getItem('ConvertTheme') === 'dark' ? true : false
    );

    const handleClick = ()=>{
        const UpdateTheme = !theme;
        setTheme(UpdateTheme)
        localStorage.setItem('ConvertTheme' , UpdateTheme ? 'dark' : 'light')
    };
    useEffect(()=>{
        if(theme === true)
        {
            document.body.classList.add('dark')
        }
        else
        {
            document.body.classList.remove('dark')

        }
    },[theme])



    return (
    <Fragment>
        <button
            onClick={handleClick}
            className='btn-theme'    
            >
            {
                theme ? <MdOutlineLightMode className='icon-light'/> : <MdOutlineDarkMode className='icon-dark'/>

            }
        </button>
    </Fragment>
  )
}

export default DarkToLight
