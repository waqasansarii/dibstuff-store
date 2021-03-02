import React, { useState } from 'react'
import './style.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import TocIcon from '@material-ui/icons/Toc';
import Btns from '../loginBtns/loginBtns'
import SearchBar from '../searchbar/searchHead'
import MobDropDown from '../mobdropdown/mobdropdown'


const Header = () => {

    let [hide, setHide] = useState(false)
    let [close, setClose] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    if (width > 950) {
        hide = true
        close = false
    }

    const handleOpen = () => {
        setClose(true)
        setHide(!hide)
    }
    const handleClose = () => {
        setClose(false)
        setHide(!hide)
    }

    return (
        <div className='header_container'>
            <div className='main_header_container'>
                {/* <img src={logo} alt=""/> */}
                <h2 className="navbar_logo">
                    <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                        DIBSTUFF
                    </Link>
                </h2>
                <div className='search_bar_div'>
                    <SearchBar />

                </div>
                <Btns className='btns' />

                {
                    !hide ?
                        <div className='bar_div'>
                            <TocIcon className='bar' onClick={handleOpen} />
                        </div>
                        :
                        null

                }
                {close ?

                    <div className='close_div'>
                        <p onClick={handleClose}> &times;</p>
                    </div>
                    :
                    null
                }
            </div>
            {close?
            <MobDropDown />
            :
            null
            }
        </div>
    )
}

export default Header


