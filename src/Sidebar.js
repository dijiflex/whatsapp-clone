import React, { useEffect, useState } from 'react'
import SidebarChat from './SidebarChat'
import {Avatar, IconButton}  from "@material-ui/core";
import './Sidebar.css';
import db from './firebase'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  {SearchOutlined, Unsubscribe } from '@material-ui/icons'
function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()

        })))));

        return () =>{
            Unsubscribe();
        }
    }, [])
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <IconButton>
                <Avatar/>
                </IconButton>
                
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
  
                </div>

            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContaianer'>
                    <SearchOutlined/>
                    <input placeholder='Search or Start a new Chat' />
                </div>
                
            </div>
            <div className='sidebar__chats'>
                <SidebarChat addNewChat/>
                {rooms.map(room => ( <SidebarChat key={room.id} id={room.id} name={room.data.name} />))}
            </div>
        </div>
    )
}

export default Sidebar
