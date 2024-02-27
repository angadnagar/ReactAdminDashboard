import React from 'react'
import './widgetSm.css'
import { Visibility } from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tom Briese</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
               
               <Visibility className='widgetSmIcon'/>
               Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tom Briese</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
               
          <Visibility className='widgetSmIcon'/>
               Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tom Briese</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
               
          <Visibility className='widgetSmIcon'/>
               Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tom Briese</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
               
          <Visibility className='widgetSmIcon'/>
               Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tom Briese</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
               
          <Visibility className='widgetSmIcon'/>
               Display
          </button>
        </li>
      </ul>
      </div>
  )
}

export default WidgetSm