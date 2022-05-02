import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../StateProvider'
//import userEvent from '@testing-library/user-event';
// import { Collapse } from '@mui/material';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <SidebarRow src="" title="Joe Adam" />
            <SidebarRow Icon={LocalHospitalIcon}
                title='Covid-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon}
                title='pages' />
            <SidebarRow Icon={PeopleIcon}
                title='Friends' />
            <SidebarRow Icon={ChatIcon}
                title='Messenger' />
            <SidebarRow Icon={StorefrontIcon}
                title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon}
                title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined}
                title='More' />
            
            {/*<SidebarRow Icon={userEvent} 
        title='Videos'/>  */}


        </div>
    )
}

export default Sidebar;
// Collapse