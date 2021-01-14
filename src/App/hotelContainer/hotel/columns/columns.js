import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import classes from '../../../../convertion/App.css';
import img1 from '../../../../img/user-3.jpg';
import img2 from '../../../../img/user-4.jpg';
import img3 from '../../../../img/user-5.jpg';
import img4 from '../../../../img/user-6.jpg';
import review1 from '../../../../img/user-1.jpg';
import review2 from '../../../../img/user-2.jpg';

const Fcolumn = props =>{
    return (
    <div className={classes.detail}>
        <div className={classes.description}>
            <p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <p className={classes.paragraph}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className={classes.list}>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Close to the beach</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Breakfast include</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Free airport shuttle</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Air conditioning and heating</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Free wifi in all rooms</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>Pets allowed</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>We speak all languages</li>
                <li className={classes.list__item}><MdKeyboardArrowRight className={classes.list__icon}/>perfect for families</li>
            </ul>
            <div className={classes.recommend}>
                <p className={classes.recommend__count}>
                    Lucy and 3 other friends recommend this hotel.
                </p>
                <div className={classes.recommend__friends}>
                    <img src={img1} alt="Friend 1" className={classes.recommend__photo}/>
                    <img src={img2} alt="Friend 2" className={classes.recommend__photo}/>
                    <img src={img3} alt="Friend 3" className={classes.recommend__photo}/>
                    <img src={img4} alt="Friend 4" className={classes.recommend__photo}/>

                </div>
            </div>
        </div>

        <div className={classes.userReviews}>
            <div className={classes.review}>
                <FaQuoteLeft className={classes.review__icon}/>
                <blockquote className={classes.review__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</blockquote>
                <div className={classes.review__user}>
                    <img src={review1} alt="Review 1" className={classes.review__photo}/>
                    <div className={classes.review__userbox}>
                        <p className={classes.review__userName}>Nick Smith</p>
                        <p className={classes.review__userDate}>Feb 23rd, 2020</p>
                    </div>
                    <div className={classes.review__rating}>7.8</div>
                </div>
            </div>

            <div className={classes.review}>
                <FaQuoteLeft className={classes.review__icon}/>
                <blockquote className={classes.review__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</blockquote>
                <div className={classes.review__user}>
                    <img src={review2} alt="Review 2" className={classes.review__photo}/>
                    <div className={classes.review__userbox}>
                        <p className={classes.review__userName}>Mary Thomas</p>
                        <p className={classes.review__userDate}>Sebt 13rd, 2020</p>
                    </div>
                    <div className={classes.review__rating}>9.3</div>
                
                </div>
            </div>

            <div className={classes.button_inline}>Show all <span>&rarr;</span></div>
        </div>
    </div>
)
}

export default Fcolumn;