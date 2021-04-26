
import React, { useEffect, useState } from 'react';
import {Avatar, IconButton } from "@material-ui/core";
import './Chat.css';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('');

    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000)) 
        
    }, []);

    const sendMessage = (e) => { 
        e.preventDefault()
        console.log('you typed' + input)
    }
    
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>Room Mame</h3>
                    <p>Last Seen at .....</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className={`chat_message ${false && 'chat_receiver'}`}>
                <span className='chat__name'>Felix Omuok</span>
                     Hello boys how you dong?
                <span className='chat__timestamp'>02:50 pm</span>   
                </p>
                
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                
                <form>
                    <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Type a Message' />
                    <button  type='submit' onClick={sendMessage}>Send a Message</button>
                </form>

                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
