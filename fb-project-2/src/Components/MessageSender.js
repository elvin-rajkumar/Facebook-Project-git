import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { Input } from '@mui/material';
import './MessageSender.css';

import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { color } from '@mui/system';
const MessageSender = () => {
    const [input, setInput] =useState("")
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = () => {
        console.log("submitting")
    }
  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src="https://tse3.mm.bing.net/th?id=OIP.b0rF7YzDUSJQQnuUvyjJEwHaEo&pid=Api&P=0&w=256&h=160"/>
            <form>
                <input type="text" 
                className="messageSender_input" 
                placeholder="What is on your mind?" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}/>
                 <Input type="file" 
                 className="messageSender_fileSelector" 
                 onChange={handleChange}/>
                 <button 
                 onClick={handleSubmit} 
                 type="submit">Hidden Submit</button>
            </form>
            
        </div>

<div className='messageSender_button'>
    <div className='messageSender_option'>
<VideocamIcon style={{color:'red'}}/>
<h3>Live Video</h3>
    </div>
    <div className='messageSender_option'>
<PhotoLibraryIcon style={{color:'green'}}/>
<h3>Photo/Video</h3>
    </div>
    <div className='messageSender_option'>
<InsertEmoticonIcon style={{color:'orange'}}/>
<h3>Feeling/Activity</h3>
    </div>


</div>
        
    </div>
  )
}

export default MessageSender