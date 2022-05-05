import React from 'react'
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Post.css';

const Post = ({profilePic,imgName,username,message,timestamp}) => {

  

  return (
    <div className='post'>
        <div className='post_top'>
          <Avatar src={profilePic} className="post_avatar"/>
          <div className='post_topInfo'>
              <h3>{username}</h3>
              <p>{new Date(parseInt(timestamp)).toUTCString()}</p>      
              
          </div>
          
        </div>
        <img className='image'  src={imgName} alt="adam_pic"/>
<div className='post_button'>
    <p>{message}</p>

    {/* image is comming later */}
    <p className='likes'><ThumbUpIcon/><FavoriteIcon/>You and 9 others</p>
</div>
        <div className='post_options'>
          <div className='post_option'>
             <ThumbUpIcon className='like'/>
              <p className='like'>Like</p> 
          </div>
          <div className='post_option'>
              <ChatBubbleOutlineIcon/>
              <p>Comment</p>
          </div>
          <div className='post_option'>
              <NearMeIcon/>
              <p>Share</p>
          </div>
          <div className='post_option'>
              <AccountCircleIcon/>
              <ExpandMoreOutlined/>
          </div>
      </div>
    </div>

  )
}

export default Post