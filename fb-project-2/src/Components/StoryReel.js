import React from 'react'
import Story from './Story'
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className='storyReel'>
        <Story
           image="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg"
           profileSrc="https://content.fortune.com/wp-content/uploads/2017/02/gettyimages-163292239.jpg"
           title="Joe Adam"
        />

<Story
           image="https://content.fortune.com/wp-content/uploads/2017/02/gettyimages-163292239.jpg"
           profileSrc="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg"
           title="Elvin Rajkumar"
        />

<Story
           image="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg"
           profileSrc="https://images.search.yahoo.com/search/images;_ylt=Awr9ImmefmpipjAAPZRXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZANMT0NVSTAzOEJfMQRzZWMDcGl2cw--?p=images&fr2=piv-web&type=E211US826G91649&fr=mcafee#id=5&iurl=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs---Jp3oE95--%2Fc_fill%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600%2F199zpfi8dig2njpg.jpg&action=click"
           title="Sonny Sangha"
        />
    </div>
  )
}

export default StoryReel