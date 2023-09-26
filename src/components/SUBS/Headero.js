import React from 'react'
import { useState,useEffect } from 'react';
import { pic1 } from '../../assects/fake_profiles';

const Header = () => {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [bodyActive, setBodyActive] = useState(false);
  const [Dark, setMode] = useState(localStorage.getItem("Mode") === "dark" || false);
  const [shwPrf,setShowPrf]=useState("");
  const ToggleMode = () => {
    if (Dark === false) {
      document.body.classList.add('dark');
      localStorage.setItem("Mode", "dark");
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem("Mode", ""); // Remove the "Mode" key from local storage
    }
    setMode(!Dark); // Toggle the state
  }
  

  const handleMenuBtnClick = () => {
    setSideBarActive(!sideBarActive);
    setBodyActive(!bodyActive);
  };

  const handleCloseBtnClick = () => {
    setSideBarActive(false);
    setBodyActive(false);
  };

  const handleScroll = () => {
    // Assuming you have references to 'profile' and 'search' elements
    // Replace the following lines with appropriate logic for your component
    // profile.classList.remove('active');
    // search.classList.remove('active');

    if (window.innerWidth < 1200) {
      setSideBarActive(false);
      setBodyActive(false);
    }
  };

  // Attach the 'handleScroll' function to the window's scroll event
  const showProfilePopUp=()=>{
    if(shwPrf==="")
    {
      setShowPrf("active");
    }
    else
    {
      setShowPrf("")
    }
  }

  window.onscroll = handleScroll;
  return (
  <>
        <header class="header">
        
        <section class="flex">

            <a href="/" class="logo">Studify</a>

            <form action="" method="post" class="search-form">
              <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
              <button type="submit" class="fas fa-search"></button>
            </form>

            <div className="icons">
              <div id="menu-btn" className="fas fa-bars appearOnlyOnMobile" onClick={handleMenuBtnClick}></div>
              <div id="search-btn" className="fas fa-search"></div>
              <div id="user-btn" onClick={() => showProfilePopUp()} className="fas fa-user"></div>
              <div id="light-mode-btn" onClick={() => ToggleMode()} className={Dark ? "fas fa-moon" : "fas fa-sun"}></div>
            </div>

            <div class={`profile ${shwPrf}`}>
              <img src={pic1} class="image" alt=""/>
              <h3 class="name">pavan bejadi</h3>
              <p class="role">student</p>
              <a href="/Profile" class="btn">view profile</a>
              <div class="flex-btn">
                  <a href="/login" class="option-btn">login</a>
                  <a href="/register" class="option-btn">register</a>
              </div>
            </div>

        </section>
    </header> 
        <div className={`side-bar ${sideBarActive ? 'active' : ''}`}>

        <div id="close-btn"  onClick={handleCloseBtnClick}>
            <i className="fas fa-times"></i>
        </div>
    
        <div className="profile ">
            <img src={pic1} className="image" alt=""/>
            <h3 className="name">pavan bejadi</h3>
            <p className="role">student</p>
            <a href="/Profile" className="btn">view profile</a>
        </div>
    
        <nav className="navbar">
            <a href="/"><i className="fas fa-home"></i><span>home</span></a>
            <a href="/About"><i className="fas fa-question"></i><span>about</span></a>
            <a href="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
            <a href="/Teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
            <a href="/Contact"><i className="fas fa-headset"></i><span>contact us</span></a>
        </nav>
    
      </div>
  </>
  )
}

export default Header