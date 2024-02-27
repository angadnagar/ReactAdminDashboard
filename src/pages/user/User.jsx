import React from 'react'
import './user.css';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            
        <h1 className='userTitle'>user</h1>
        <Link to="/newUser">
        <button className='userAddButton'>Create</button>
        </Link>
        </div>

        <div className='userContainer'>

        <div className='userShow'>
            <div className='userShowTop'>
                <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='userShowImg' />
                <div className='userShowTopTitle'>
                    <span className='userShowUserName'>Arin Wack</span>
                    <span className='userShowUserTitle'>Software Engineer</span>
                </div>
            </div>
            <div className='userShowBottom'>
              <span className='userShowTitle'>Account Details</span>
              <div className='userShowInfo'>
                <PermIdentity className='userShowIcon'/>
                <span className='userShowInfoTitle'>arinwack20</span>
              </div>

              <div className='userShowInfo'>
                <CalendarToday className='userShowIcon'/>
                <span className='userShowInfoTitle'>10.10.2000</span>
              </div>
              
              <span className='userShowTitle'>Contact Details</span>
              <div className='userShowInfo'>
                <PhoneAndroid className='userShowIcon'/>
                <span className='userShowInfoTitle'>+91 9287646278</span>
              </div>

              <div className='userShowInfo'>
                <MailOutline className='userShowIcon'/>
                <span className='userShowInfoTitle'>arinwack@gmail.com</span>
              </div>

              <div className='userShowInfo'>
                <LocationSearching className='userShowIcon'/>
                <span className='userShowInfoTitle'>Bhopal | Madhya Pradesh</span>
              </div>
            </div>
        </div>

        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form action="" className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input type="text" placeholder='arinwack20' className='userUpdateInput' />
              </div>

              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input type="text" placeholder='Arin Wack' className='userUpdateInput' />
              </div>

              <div className='userUpdateItem'>
                <label>Email</label>
                <input type="email" placeholder='arinwack@gmail.com' className='userUpdateInput' />
              </div>

              <div className='userUpdateItem'>
                <label>Phone</label>
                <input type="text" placeholder='+91 9287646278' className='userUpdateInput' />
              </div>

              <div className='userUpdateItem'>
                <label>Address</label>
                <input type="text" placeholder='Bhopal | Madhya Pradesh' className='userUpdateInput' />
              </div>

              
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='userUpdateImg' />
                <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>

              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
        </div>

    </div>
  )
}

export default User