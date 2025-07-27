import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from "./../data/data.js";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import "./../index.css";

function FixedComponent() {

  const [seletedMenu, setSeletecMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSeletecMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu-selected";

  return (
    <div className='row' style={{ width: "100%" }}>
      <div style={{ height: "100vh", width: "40%" }} className='border-end'>
        <div className='row mt-4 ms-3 border-bottom pb-3'>
          <div className='col-2'>NIFTY 50</div>
          <div className='col-2 text-dark-danger'>0.00</div>
          <div className='col-2 text-muted'>0</div>
          <div className='col-2 ms-1'>SENSEX</div>
          <div className='col-2 text-danger'>0.00</div>
          <div className='col-1 text-center text-muted'>0</div>
        </div>

        <div className='row m-3 fs-6 text-muted'>
          <p className='col-10'>Search eg:infy, bse, nifty, fut weekly, gold mcx</p>
          <p className='col-1'>{watchlist.length}/50</p>
        </div>
        <ul className='list'>
          {watchlist.map((stock, index) => {
            return (
              <WatchListItem stock={stock} key={index} />
            );
          })}
        </ul>


      </div>
      <div style={{ height: "10vh", width: "60%", fontSize: "12px", padding: "18px", marginLeft: "10px" }} className='row border-bottom'>
        <img src='../media/images/logo.png' className='col-1 me-5' style={{ height: '30px', width: "50px" }}></img>
        <Link to='./dashboard' className='col-4 text-decoration-none text-black text-end'><span className={seletedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</span></Link>
        <Link to='./orders' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 1 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(1) }}>Orders</span></Link>
        <Link to='./holdings' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 2 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(2) }}>Holdings</span></Link>
        <Link to='./positions' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 3 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(3) }}>Positions</span></Link>
        <Link to='./funds' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 4 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(4) }}>Funds</span></Link>
        <Link to='./apps' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 6 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(5) }}>Apps</span></Link>
        <Link to='./profile' className='col-1 text-decoration-none text-black border-start ps-4 row'><i className="fa-solid fa-circle-user"><span className={seletedMenu === 6 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(6) }}>Profile</span></i></Link>
      </div>

    </div>
  )
}

export default FixedComponent;


const WatchListItem = ({ stock }) => {

  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  }

  return (
    <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='item-h'>
      <div className='item border-bottom p-2'>
        <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
        <div className='itemInfo'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown ? (
            <ArrowDropDownIcon className='down' />
          ) : (
            <ArrowDropUpIcon className='up' />
          )}
          <span className='price'>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </p>
  );

}

const WatchListActions = ({ uid }) => {
  return (
    <span className='actions'>
      <span className='p-2'>
        <Tooltip title="buy (B)" placement="top" arrow TransitionComponet={Grow}>
          <button className='buy'>Buy</button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponet={Grow}>
          <button className='sell'>Sell</button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponet={Grow}>
          <button className='btn'><BarChartIcon/></button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="more (m)" placement="top" arrow TransitionComponet={Grow}>
          <button className='more'><MoreHorizIcon/></button>
        </Tooltip>
      </span>
    </span>
  );
}


