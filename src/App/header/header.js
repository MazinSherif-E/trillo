import React from 'react';
import logo from '../../img/logo.png';
import userImg from '../../img/mazin.jpg';
import { BiSearch } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { IoIosChatboxes } from 'react-icons/io';
import classes from '../../convertion/App.css';

const header = props =>{    
    return(
        <div>
        <div className={classes.header}>
            <img src={logo} alt="Trillo Logo" className={classes.header__logo}/>
            
            <form action="#" className={classes.search}>
                <input type="text" className={classes.search__input} placeholder="Search hotels"/>
                <button className={classes.search__button}>
                    <BiSearch className={classes.search__icon}/>
                </button>
            </form>

                <nav className={classes.user_nav}>
                    <div className={classes.user_nav__icon_box}>
                        <BsFillBookmarkFill className={classes.user_nav__icon}/>
                        <span className={classes.user_nav__notification}>7</span>
                    </div>
                    <div className={classes.user_nav__icon_box}>
                        <IoIosChatboxes className={classes.user_nav__icon}/>
                        <span className={classes.user_nav__notification}>13</span>
                    </div>
                    <div className={classes.user_nav__user}>
                        <img src={userImg} alt="user photo" className={classes.user_nav__user_photo}/>
                        <span className={classes.user_nav__user_name}>Mazin</span>
                    </div>
                </nav>
        </div>
        </div>
    )
}

export default header;