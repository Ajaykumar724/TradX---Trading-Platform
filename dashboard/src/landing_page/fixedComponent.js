import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from "./../data/data.js";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import "./../index.css";
import BuyActionWindow from './buyaction/BuyActionWindow.js';
import GeneralContext, { GeneralContextProvider } from './generalcontext/GeneralContext.js';
import DoughnutChart from './chart/DoughnutChart';

function FixedComponent() {

  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);


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

  const labels = watchlist.map((subArray)=>subArray["name"]);
  
  const data = {
    labels,
    datasets: [
      {
      label: 'Stock Prices',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    ]
  }

//   export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

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
        {/* <GeneralContextProvider>
            // <BuyActionWindow/>
        </GeneralContextProvider> */}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        <DoughnutChart data={data}/>
      </div>

      
      <div style={{ height: "10vh", width: "60%", fontSize: "12px", padding: "18px", marginLeft: "10px" }} className='row border-bottom'>
        <img src='../media/images/logo.jpg' className='col-1 me-5' style={{ height: '40px', width: "60px" , borderRadius:"50%" }}></img>
        <Link to='./dashboard' className='col-3 text-decoration-none text-black text-end'><span className={seletedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</span></Link>
        <Link to='./orders' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 1 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(1) }}>Orders</span></Link>
        <Link to='./holdings' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 2 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(2) }}>Holdings</span></Link>
        <Link to='./positions' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 3 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(3) }}>Positions</span></Link>
        <Link to='./funds' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 4 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(4) }}>Funds</span></Link>
        <Link to='./apps' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 5 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(5) }}>Apps</span></Link>
        <a href='http://localhost:3001' className='col-1 text-decoration-none text-black'><span className={seletedMenu === 6 ? activeMenuClass : menuClass} onClick={() => { handleMenuClick(6) }}>Home</span></a> { /* change after deploy*/}
        <Link to='./profile' className='col-1 text-decoration-none text-black border-start ps-4 row'><i className="fa-solid fa-circle-user"><span className={seletedMenu === 6 ? activeMenuClass : menuClass} onClick={() => { handleProfileClick }}>Profile</span></i></Link>
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
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='item-h'>
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
    </div>
  );

}

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  }
  return (
    <span className='actions'>
      <span className='p-2'>
        <Tooltip title="buy (B)" placement="top" arrow TransitionComponent={Grow}  onClick={handleBuyClick}>
          <button className='buy text-white'>Buy</button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className='sell text-white'>Sell</button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className='btn'><BarChartIcon/></button>
        </Tooltip>
      </span>
      <span className='p-2'>
        <Tooltip title="more (m)" placement="top" arrow TransitionComponent={Grow}>
          <button className='more'><MoreHorizIcon/></button>
        </Tooltip>
      </span>
    </span>
  );
}


