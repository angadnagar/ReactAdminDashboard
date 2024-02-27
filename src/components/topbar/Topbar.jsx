import React from 'react'
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>adminPanel</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
              <NotificationsNoneIcon/>
              <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
              <LanguageIcon/>
                </div>
                <div className='topbarIconContainer'>
              <SettingsIcon/>
                </div>

                <img src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg" alt="" className='topAvatar' />
                
                
            </div>

        </div>
    </div>
  )
}
