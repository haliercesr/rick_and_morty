import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const NavBar =(props)=> {
    const{onSearch}=props;
    return <div >
    <SearchBar onSearch={onSearch}/>
    <Link to='/about'>
    < button>About</button>
    </Link>
    <Link to='/home'>
    <button>Home</button>
    </Link>
    </div>
} 
export default NavBar;