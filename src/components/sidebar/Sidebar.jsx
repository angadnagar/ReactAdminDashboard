import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                    <li className='sidebarListItem active'>
                         <HomeIcon className='sidebarIcon'/>
                         Home
                    </li>
                    </Link>
                    <li className='sidebarListItem'>
                         <TimelineIcon className='sidebarIcon'/>
                         Analytics
                    </li>
                    <li className='sidebarListItem'>
                         <TrendingUpIcon className='sidebarIcon'/>
                         Sales
                    </li>
                </ul>
            </div>

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to="/users" className='link'>
                    <li className='sidebarListItem '>
                         <PersonIcon className='sidebarIcon'/>
                         Users
                    </li>
                    </Link>

                    <Link to="/products" className='link'>
                    <li className='sidebarListItem'>
                         <StoreIcon className='sidebarIcon'/>
                         Products
                    </li>
                    </Link>
                    <li className='sidebarListItem'>
                         <PaidIcon className='sidebarIcon'/>
                         Transactions
                    </li>

                    <li className='sidebarListItem'>
                         <AssessmentIcon className='sidebarIcon'/>
                          Reports
                    </li>
                </ul>
            </div>

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem '>
                         <MailIcon className='sidebarIcon'/>
                         Mail
                    </li>
                    <li className='sidebarListItem'>
                         <RateReviewIcon className='sidebarIcon'/>
                         Feedback
                    </li>
                    <li className='sidebarListItem'>
                         <ChatBubbleIcon className='sidebarIcon'/>
                         Messages
                    </li>
                </ul>
            </div>

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem '>
                         <BusinessCenterIcon className='sidebarIcon'/>
                         Manage
                    </li>
                    <li className='sidebarListItem'>
                         <TimelineIcon className='sidebarIcon'/>
                         Analytics
                    </li>
                    <li className='sidebarListItem'>
                         <ReportIcon className='sidebarIcon'/>
                         Reports
                    </li>
                </ul>
            </div>

            </div>
            </div>
  )
}
