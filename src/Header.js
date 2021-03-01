import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    //BEM naming classes = Block, Element, Modifier
    <div className="header">
      {/* <h1>I am a header</h1> */}
      <div className="header__icons">
        {/* All icons here */}

        {/* wrapping each icon*/}

        {/* Making Home a selected state header__icon--active*/}
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://www.pikpng.com/pngl/b/46-464832_google-play-movies-tv-logo-png-transparent-logo.png"
        alt=""
      />
    </div>
  );
}

export default Header;
