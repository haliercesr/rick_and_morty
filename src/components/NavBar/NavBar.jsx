import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from '../NavBar/NavBar.module.css'


const NavBar =(props)=> {
    const{onSearch}=props;
    return <div className={style.nav}>
    <SearchBar onSearch={onSearch}/>
    <Link to='/about'>
    < button className={style.navButton1}>About</button>
    </Link>
    <Link to='/home'>
    <button className={style.navButton2}>Home</button>
    </Link>
    </div>
} 
export default NavBar;