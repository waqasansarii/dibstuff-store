import React, { useState } from 'react'
import './style.css'
import DropDown from '../dropDown/dropDown'
import {Link} from 'react-router-dom'


const NavList = () => {
 
    
    let [open, setOpen] = useState(false)
    let [open2, setOpen2] = useState(false)
    let [open3, setOpen3] = useState(false)
    let [open4, setOpen4] = useState(false)

    const handleDropdownWomen = () => {
        setOpen(!open)
        setOpen2(false)
        setOpen3(false)
        setOpen4(false)
    }

    const handleDropdownmen = () => {
        setOpen(false)
        setOpen2(!open2)
        setOpen3(false)
        setOpen4(false)
    }
    const handleDropdownKids = () => {
        setOpen(false)
        setOpen2(false)
        setOpen3(!open3)
        setOpen4(false)
    }

    return (
        <div className='navlist_container'>
            <div className='main_navList_div'>
                <ul className='navlist_ul'>
                    <li >
                       <p onClick={handleDropdownWomen}> Women</p>
                        {
                            open ?
                                <DropDown 
                                tab='women'  
                                all='See All'
                                bags='Bags'
                                shoes='Shoes'
                                clothes='Clothes'
                                />
                                :
                                null
                        }
                    </li>
                    <li>
                       <p onClick={handleDropdownmen}> Men</p>

                       {
                            open2 ?
                                <DropDown 

                                all='See All'
                                tab='men'
                                // bags='Bags'
                                grooming='Grooming'
                                shoes='Shoes'
                                clothes='Clothes'
                                />
                                :
                                null
                        }
                    </li>
                    <li>
                       <p onClick={handleDropdownKids}> Kids</p>

                       {
                            open3 ?
                                <DropDown 
                                tab='kids'
                                all='See All'
                                // bags='Bags'
                                toys='Toys'
                                shoes='Shoes'
                                clothes='Clothes'
                                />
                                :
                                null
                        }

                       </li>
                    <li>
                       <p> About</p>
                       {
                            open4 ?
                                <DropDown 

                                all='See All'
                                bags='Bags'
                                shoes='Shoes'
                                clothes='Clothes'
                                />
                                :
                                null
                        }

                       </li>
                </ul>
            </div>
        </div>
    )
}

export default NavList