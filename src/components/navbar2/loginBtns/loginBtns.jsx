import React from 'react'
import './style.css'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';




const Btns = ({className}) => {
    return (
        <div className={className}>

        <div className='btns_div'>
            <button className='acount_btn'>Sign up</button>
            <button className='acount_btn'>login</button>
            <span>
                <HelpOutlineIcon className='help_icon' />
            </span>
            <span className='guide'>
                Your Guide To Vinted
            </span>
        </div>
        </div>
    )
}
export default Btns