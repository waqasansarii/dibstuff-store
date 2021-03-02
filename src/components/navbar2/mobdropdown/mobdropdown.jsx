import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import Btns from '../loginBtns/loginBtns'
import LocalMallIcon from '@material-ui/icons/LocalMall';

const MobDropDown = () => {
    return(
        <div className='mob_dropdown_container'>
            <div className='main_mob_div'>
                <div className='btns_div_mobview'>
                    <Btns />
                       
                </div>
                <div>
                    <p className='category_tag'>Categories</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <LocalMallIcon  className='mob_view_icons'/>
                           <p>Women</p>
                        </li>
                        <li>
                           <LocalMallIcon  className='mob_view_icons'/>
                           <p>Men</p>
                        </li>
                        <li>
                           <LocalMallIcon  className='mob_view_icons'/>
                           <p>Kids</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='category_tag'>Discover</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <p>How it works</p>
                        </li>
                        <li>
                           <p>Get the app</p>
                        </li>
                        <li>
                           <p>Help Center</p>
                        </li>
                        <li>
                           <p>Infoboard</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='category_tag'>Company</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <p>About Us</p>
                        </li>
                        <li>
                           <p>Jobs</p>
                        </li>
                        <li>
                           <p>Press</p>
                        </li>
                        <li>
                           <p>Advertising</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='category_tag'>Policies</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <p>Trust And Safety</p>
                        </li>
                        <li>
                           <p>Privacy</p>
                        </li>
                        <li>
                           <p>Terms</p>
                        </li>
                        <li>
                           <p>Cookie Policy </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='category_tag'>Privacy</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <p>Cookie Setting</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='category_tag'>Community</p>
                </div>
                <div className='mob_view_ul_div'>
                    <ul  className='mob_view_ul'>
                        <li>
                           <p>Forum</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobDropDown