import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './NavBar.css';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const NavBar = (props) => {
    const location = useLocation()
    const { onSearch, SubmitSound } = props;
    const myFavorites = useSelector(state => state.myFavorites)


    const HomeNav = () => {
        return <>
            <SearchBar SubmitSound={SubmitSound} onSearch={onSearch} />
            <Link to='/about'>
                < button id="bt1Home" onClick={() => { SubmitSound.play() }}>
                    <span > About
                    </span></button>
            </Link>
            <Link to='/Favorites'>
                <button id="bt3Home" onClick={() => { SubmitSound.play() }}>
                {
                 myFavorites.length>0 ? (
                 <span>❤️</span>
                  ) : (
                <span >🤍</span>
                 )
                }
                    <span >{myFavorites.length}</span>
                </button>
            </Link>
        </>
    }

    const Favorites = () => {
        return <>
            <Link to='/about'>
                < button id="bt1Favorite" onClick={() => { SubmitSound.play() }}>
                    <span > About
                    </span></button>
            </Link>
            <Link to='/home'>
                <button id="bt2Favorite" onClick={() => { SubmitSound.play() }}>
                    <span > Home
                    </span></button>
            </Link>

        </>
    }

    const About = () => {
        return <>
            <Link to='/home'>
                <button id="bt2About" onClick={() => { SubmitSound.play() }}>
                    <span > Home
                    </span></button>
            </Link>
            <Link to='/Favorites'>
                <button id="bt3About" onClick={() => { SubmitSound.play() }}>
                    <span id="heartNav"> 🤍
                    </span>
                    <span >{myFavorites.length}</span>
                </button>
            </Link>

        </>
    }

    return <div className="nav">
        {location.pathname === "/home" ? (HomeNav()) : null}
        {location.pathname === "/Favorites" ? (Favorites()) : null}
        {location.pathname === "/about" ? (About()) : null}
    </div>
}
export default NavBar;