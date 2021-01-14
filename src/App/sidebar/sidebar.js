import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiMapAlt } from 'react-icons/bi';
import { FaPlaneDeparture } from 'react-icons/fa';
import { ImKey } from 'react-icons/im';
import classes from '../../convertion/App.css';

const sidebar = props =>{
    return(
        <div>
        <div className={classes.sidebar}>
            <ul className={classes.side_nav}>
                <li className={[classes.side_nav__item, classes.side_nav__item_active].join(' ')}>
                    <a href="#" className={classes.side_nav__link}>
                        <AiFillHome className={classes.side_nav__icon}/>
                        <span>Hotel</span>
                    </a>
                </li> 

                <li className={classes.side_nav__item}>
                    <a href="#" className={classes.side_nav__link}>
                        <FaPlaneDeparture className={classes.side_nav__icon}/>
                        <span>Flight</span>
                    </a>
                </li>

                <li className={classes.side_nav__item}>
                    <a href="#" className={classes.side_nav__link}>
                        <ImKey className={classes.side_nav__icon}/>
                        <span>Car rental</span>
                    </a>
                </li>

                <li className={classes.side_nav__item}>
                    <a href="#" className={classes.side_nav__link}>
                        <BiMapAlt className={classes.side_nav__icon}/>
                        <span>Tours</span>
                    </a>
                </li>

            </ul>

            <div className={classes.legal}>
                &copy; 2020 by trillo. All rights reserved.
            </div>
        </div>
        </div>
    )
}

export default sidebar;