import React from 'react';
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Tinder from "./icont.jpeg";
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className="header">
           {/* <h2>i am header</h2>  */}
        <IconButton>
        <PersonIcon fontSize="large"className="header_icon" />
   
        </IconButton>
        <img className="header_logo"
        src={Tinder}
        
        />
        <IconButton>
        <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
       
        
        
     


        </div>
    )
}

export default Header
