import React from 'react'
import "./swipe.css"
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton  from '@material-ui/core/IconButton';

import FlashOnIcon  from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return (
        <div className="swipeButtons MultiIcon-root">

        <IconButton className="swipeButtons_repeat">
       <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_left">
       <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_star">
       <StartRateIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_right">
       <FavoriteIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_lightning">
       <FlashOnIcon  fontSize="large"/>
        </IconButton>
        
        </div>
    )
}

export default SwipeButtons

