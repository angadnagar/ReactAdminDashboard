import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,425</span>
                <span className='featuredMoneyRate'>-10.4 <ArrowDownwardIcon className='featuredIcon negative'/> </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$4,410</span>
                <span className='featuredMoneyRate'>-1.4 <ArrowDownwardIcon className='featuredIcon negative'/> </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,425</span>
                <span className='featuredMoneyRate'>+10.4 <ArrowUpward className='featuredIcon'/> </span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo