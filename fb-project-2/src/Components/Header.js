import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
// import FaceIcon from '@mui/icons-material/Face';


import "./Header.css" ;
import Post from './Post';
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png" alt="facebook_logo" />

        <div className='header_input'>
          <SearchIcon/>
          <input placeholder='Search Facebook' type="text"/>
          </div>
          </div>
        <div className='header_center'>

          <div className='header_option header_option--active'>
            <HomeIcon fontSize='large'/>
            </div>
            <div className='header_option'>
              <FlagIcon fontSize='large'/>
            </div>
            <div className='header_option'>
               <SubscriptionsIcon fontSize='large'/> 
            </div>
            <div className='header_option'>
               <StorefrontIcon fontSize='large'/> 
            </div>
            <div className='header_option'>
               <SupervisedUserCircleIcon fontSize='large'/> 
            </div>
                    
          </div>
          <div className='header_right'>
            <div className='header_info'>
              {/* <Avatar/> */}
              {/* <Avatar/> */}
              
              <Avatar src="https://content.fortune.com/wp-content/uploads/2017/02/gettyimages-163292239.jpg"/>
              
              <h4>Joe Adam</h4>
            </div>
            <IconButton>
            <AddCircleIcon/>
            </IconButton>
            <IconButton>
            <ForumIcon/>
            </IconButton>
            <IconButton>
            <CircleNotificationsIcon/>
            </IconButton>
            <IconButton>
            <ExpandMoreIcon/>
            </IconButton>
            {/* <AddIcon/>      
            <NotificationsActiveIcon/> */}
          </div>
    </div>
  )
}

export default Header;