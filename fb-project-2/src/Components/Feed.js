import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>

<Post
  profilePic=""
  message="yoo this is a message"
  timestamp="1617220982"
  imgName="imageName"
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