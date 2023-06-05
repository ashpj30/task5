import React from 'react'
import './Navbar.css';
import profile from './profile.png';
import Cart from './Cart.png'
import clogo from './clogo.png'
import search2 from './search2.png'
export const Navbar = () => {
  return (
    <div>
<div className='dropdown'>
<div class="select-container">
<select>
    <option>EN</option>
    <option>tyt</option>
</select>
<select>
    <option>USD</option>
    <option>tyt</option>
</select>
</div>
<ul>
<li><img src={profile}></img>My Profile</li>
<img src={Cart} ></img><li> Items</li>
    <li style={{color:"gray"}}>$0.00<img src={search2}></img></li>
    
  
</ul>

</div>
<div className='drop1' style={{ display: 'flex', alignItems: 'center' }}>
  <img src={clogo} style={{ height: "27px", width: "30px",marginLeft: '90px' }}></img>
  <ul style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <li style={{ marginLeft: '10px' }}>E-Comm</li>
    <li style={{ color: "#40BFFF" }}>HOME</li>
    <li>BAGS</li>
    <li>SNEAKERS</li>
    <li>BELT</li>
    <li>CONTACT</li>
  </ul></div>
    <div className='home'>
     
       <p className='home1'>Home / Hot Deal</p> /
       <p>Nike Airmax 270 React</p>
    </div>


    </div>
  )
}
