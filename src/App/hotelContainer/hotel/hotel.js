import React from 'react';
import Columns from './columns/columns';
import CTA from './CTA/cta';
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import classes from '../../../convertion/App.css';
import imgHotel1 from '../../../img/hotel-1.jpg';
import imgHotel2 from '../../../img/hotel-2.jpg';
import imgHotel3 from '../../../img/hotel-3.jpg';

const hotel = props =>{
    return(
        <div className={classes.hotel_view}>
            <div className={classes.gallery}>
                <figure className={classes.gallery__item}>
                    <img src={imgHotel1} alt="Photo hotel 1" className={classes.gallery__photo}/>
                </figure>

                <figure className={classes.gallery__item}>
                    <img src={imgHotel2} alt="Photo hotel 2" className={classes.gallery__photo}/>
                </figure>

                <figure className={classes.gallery__item}>
                    <img src={imgHotel3} alt="Photo hotel 3" className={classes.gallery__photo}/>
                </figure>
            </div>

            <div className={classes.overview}>
                <h1 className={classes.overview__heading}>
                    hotel las palmas
                </h1>
                <div className={classes.overview__stars}>
                    <AiFillStar className={classes.overview__icon_star}/>
                    <AiFillStar className={classes.overview__icon_star}/>
                    <AiFillStar className={classes.overview__icon_star}/>
                    <AiFillStar className={classes.overview__icon_star}/>
                    <AiFillStar className={classes.overview__icon_star}/>
                </div>

                <div className={classes.overview__location}>
                    <ImLocation className={classes.overview__icon_location}/>
                    <button className={classes.button_inline}>Albufeira, Portugal</button>
                </div>

                <div className={classes.overview__rating}>
                    <div className={classes.overview__rating_average}>8.6</div>
                    <div className={classes.overview__rating_counts}>429 votes</div>
                </div>
            </div>

            <Columns/>
            <CTA/>
        </div>
    )
}

export default hotel;