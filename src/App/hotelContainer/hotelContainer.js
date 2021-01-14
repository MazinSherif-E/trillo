import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Hotel from './hotel/hotel';
import classes from '../../convertion/App.css';

const container = props => {
    return(
        <div className={classes.container}>
            <Header/>
            <div className={classes.content}>
                <Sidebar/>
                <Hotel/>
            </div>
        </div>
    )
}

export default container;