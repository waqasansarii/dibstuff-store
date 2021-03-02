import React from 'react'
import SearchHeader from './searchbar/searchHead'
import Header from './header/header'
import NavList from './navlist/navlist'
import SearchBar from './searchbar/searchHead'
import './style.css'
const Navbar = ()=>{
    return(
        <div>
            <Header />
            <NavList />
            <div className='mob_search_bar'>
                <SearchBar/>
            </div>
        </div>
    )
}
export default Navbar