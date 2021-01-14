import React from 'react';
import classes from '../../../../convertion/App.css';

const cta = props => {
    return (
        <div className={classes.cta}>
            <h2 className={classes.cta__bookNow}>
                Good news! we have 4 free for your selected dates
            </h2>
            <button className={classes.btn}>
                <span className={classes.btn__visible}>Book now</span>
                <span className={classes.btn__invisible}>Only 4 rooms left </span>
            </button>
        </div>
    )
}

export default cta;