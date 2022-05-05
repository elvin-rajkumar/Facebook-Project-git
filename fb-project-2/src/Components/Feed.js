import { LineAxisOutlined } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from 'axios';

const Feed = () => {

  const [postsData, setPostsData] = useState();
  const post = postsData?.posts?.length > 0 && postsData?.posts[0];

  const current = ("https://mocki.io/v1/843861b4-722a-4e5e-a088-0cde7e3fdeca");

  const getData = (current) => {
    axios.get(current)
      .then((response) => {
        let result = response.data;
        //console.log(result.user.profile_picture);
      //  let resposts = result.posts
        console.log(result.posts.id)
        //   console.log(result);
        //      let adamuser = result.user
        //  let adampic = adamuser.profile_picture;
        setPostsData(result);
      })
      .catch((error) => {
        console.log(error)
        console.log("error occured")
      })
  }
  useEffect(() => {
    getData(current)
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={postsData?.user?.profile_picture}
        message="yoo this is a message"
        timestamp={post.posted_on}
        imgName={postsData?.user?.profile_picture}
        username="Adam "
      />

      {/* {
            postsData.map(entry => {
                <Post
                   ProfilePic={entry.avatar}
                   message={entry.text}
                   timestamp={entry.timestamp}
                   imgName={entry.imgName}
                   username={entry.user}
                />
            })
        } */}
    </div>
  )
}

export default Feed