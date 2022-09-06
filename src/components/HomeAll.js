
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import{MdLocationPin} from 'react-icons/md'
import{BiSearchAlt2} from 'react-icons/bi'
import{TiSocialFacebookCircular} from 'react-icons/ti'
import{AiFillTwitterCircle} from 'react-icons/ai'
import{FaInstagram} from 'react-icons/fa'
import Team1 from './img/TEAMS (1).jpg';
import Team2 from './img/TEAMS (2).jpg';
import Team3 from './img/TEAMS (3).jpg';
import Team4 from './img/TEAMS (1).webp';


import bckimg2 from './img/bckimg2.jpg';
import bckimg12 from './img/bckimg12.jpg';
import logo from './img/Log.png';
import bckimg6 from './img/bckimg6.jpg';
import bckimg7 from './img/bckimg7.jpg';
import bckimg8 from './img/bckimg8.jpg';
import bckimg9 from './img/bckimg9.jpg';
import bckimg10 from './img/bckimg10.jpg';

import img12 from './img/img9.jpg';
import r1 from './img/r1.jpg';
import r2 from './img/r2.jpg';
import Rooms1 from './img/ROOMS (1).jpg';
import Rooms2 from './img/ROOMS (2).jpg';
import Rooms3 from './img/ROOMS (3).jpg';
import Rooms4 from './img/ROOMS (4).jpg';
import Rooms5 from './img/ROOMS (5).jpg';
import Rooms6 from './img/ROOMS (6).jpg';
import Rooms7 from './img/ROOMS (7).jpg';
import Rooms8 from './img/ROOMS (8).jpg';
import Rooms9 from './img/ROOMS (9).jpg';

import res from './img/res.jpg';
function HomeAll() {
  const [showLinks,setShowLinks]= useState(false)

  return (
    <div className='HomeAll'>

         <div className='Navbar'>
        {/** <img src={logo} alt="" />*/}
        <div className='leftSide'>
       
        <div className='links' id={showLinks ? "hidden": ""}>
        <Link className='' to="/">Home</Link>
        {/* <Link className='' to="/Hotels">Hotels</Link> */}
        {/* <Link className='' to="/Dining">Dining & Bar</Link> */}
        <a href="#section2">About Us</a>
        <a href='#contactUs'>Contact Us</a>
        
        </div>
        <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
        </div>
        <div className='rightSide'>
        <Link className='bookNowLink' to="/Login">BOOK NOW</Link>
    
        </div>
    </div>
{/* END HEADER */}
{/* body */}
<div className="main1" id="section1" > 
     <div className='text'>
        <h1>Spend Quality <br />
        Holidays With Us</h1> <br />
        <h2>Book Room with All Inclusive <br /> <span className='middletxt'> Hotel & Resort</span></h2>
        
        </div>
</div>


{/* SECTION 2 */ }
{/* 
<div className="main2">
  

      <form action="" className='form'>
        <br /> 
        <div className='checkIn'>
        <label htmlFor="" className='lChechin'>Check in:*</label><label htmlFor="" className='lChechout'>Check out:*</label><label htmlFor="" className='lChechout'>Adult:</label><label htmlFor="" className='lChechout'>Children:</label><br /><br />

      <input type="date" id="start" name="trip-start"
       value="" className='inputCheckIn'
     />
       <input type="date" id="start" name="trip-start"
       value="" className='inputCheckout'/>

       <select name="" id="" className='adult'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
       
       </select>
       <select name="" id="" className='Children'>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
       
       </select>
       <button className=' sBar'>SEARCH</button>


        </div>
        
        

      </form>

   <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a> 
</div>*/}
{/* SECTION 3 */}
 <div className='welcome'  id="section2">
  <div className='welcomeLeft'>

  <h1>Welcome to Luxury
Premium Hotel with
All Inclusive.</h1>
<p>If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages for the best price.

Enjoy your vacancy and we do the rest Red quia numquam dolor sit amet.
</p>

  </div>
  <div className='welcomeCenter'>

  <img src={bckimg12} className='bigimg' alt="" />
  
  </div>
  <div className='welcomeRight'>
<div>

<img src={r2} alt="" />
  
</div>
<div>
<img src={bckimg2} alt="" />
  
</div>

  </div>



 </div>

 {/* SECTION 4 */}

 <div className='discoverRoom'>
  <div className='discoverHead'> <p>THE BEST ROOMS</p> 
<h5>Discover Our Rooms</h5>
<p>There are many variations of passages of Lorem Ipsum available, but the
majority have suffered words look even slightly believable.
</p>


</div>
<div className='ViewAll'><Link to='/viewAll'>View All</Link></div>
<div className='padRooms'>

    <div className='discoverRoom1'>
     <img src={Rooms9} alt=""/* style={{width:'320px', height:'200px'}}  *//>
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Hotel Hilton</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Hammanskraal</span>
          </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
    <div className='discoverRoom1'>
    <img src={Rooms9} alt=""/* style={{width:'320px', height:'200px'}} */ />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Hotel Hilton</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Hammanskraal</span>
          </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
    <div className='discoverRoom1'>
    <img src={Rooms2} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Forte Do Vale </h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span> Silverton</span>
          </div>
  
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5> */}
        {/* <button>Book</button> */}
      {/* </div> */}
     </div>
      

    </div>  <div className='discoverRoom1'>
    <img src={Rooms3} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Gran Canaria</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Centurion</span>
          </div>
   
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>


    <div className='discoverRoom1'>
    <img src={Rooms4} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Roosevelt Hotel</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Hatfield</span>
          </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
    <div className='discoverRoom1'>
    <img src={Rooms5} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Costa Brava</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Sunnyside</span>
          </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
    <div className='discoverRoom1'>
    <img src={Rooms6} alt=""/>
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Ruzzini Palace</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Lynnwood</span>
          </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
   
    <div className='discoverRoom1'>
    <img src={Rooms7} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Plaza Tour</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Brooklyn</span>
        </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>
    <div className='discoverRoom1'>
    <img src={Rooms8} alt="" />
     <div className='DiscoversubDiv'>
      <div className='subDivLeft'>
        <h5>Central Park</h5>
        <div  style={{marginTop:"-10px"}}>
        <MdLocationPin style={{color:"#1B6CC6"}}/> <span>Arcadia</span>
        </div>
       
        {/* <button>View</button> */}
      </div>
      {/* <div className='subDivRight'>
        <p>AV/NIGHT</p> 
      
        <h5>R120</h5>
        <button>Book</button>
      </div> */}
     </div>
      

    </div>

    
    

    
    </div>
    
  
  


 </div>
   {/* SECTION 5*/}
 <div className='Services'>
    <div className='servicesHead'> <p>THE BEST SERVICES</p> 
<h5>Discover Our Services</h5>
<p>There are many variations of passages of Lorem Ipsum available, but the
majority have suffered words look even slightly believable.
</p>
</div>
<div className='AllServices'>
<div className='servicesLeftImg'>
<img src={img12} alt="" />
   

</div>
<div className='servicesRightText'>
  <h2>Discover Our Services</h2>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry norem ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen of book.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit molestie consequat, <br /> vel illum colore tu feugiat nulla facilisis at vero.</p>

</div>


<div className='servicesLeftText'>
  <h2>Relax In Our Pool</h2>
<p>
Lorem Ipsum is simply dummy text of the printing and <br />  typesetting industry norem ipsum has been the <br /> industry's standard dummy text ever since the 1500s,<br />  when an unknown printer took a galley of  type and scrambled <br />  it to make a type specimen of book.

Duis autem vel eum iriure dolor <br /> in hendrerit in vulputate velit molestie consequat, vel illum <br /> colore tu feugiat nulla facilisis at vero.</p>

</div>
<div className='servicesRightImage'>
<img src={img12} alt=""/>
   

</div> 
</div>

    </div>
    <div >
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229975.2088689037!2d28.05786602979233!3d-25.75858292357852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65033%3A0xf66262b07a847b4c!2sPretoria!5e0!3m2!1sen!2sza!4v1656690429319!5m2!1sen!2sza"
//  width="1200"
//   height="450"
   style={{border:"0"}}
    allowfullscreen=""
     loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      >
     
      </iframe>
    </div>
     
    </div>
    
<div className="footer">
<div className="footerAbtUs">
  <h3>About Us</h3>
  <hr />
  <p>If you chose to stay with us you will enjoy modern home comforts in a traditional setting. Whether you are looking for a short weekend break or a longer holiday, we offer a range of packages for the best price. Enjoy your vacancy and we do the rest Red quia numquam dolor sit amet..</p>
<div>
<span className='fb'><TiSocialFacebookCircular/> </span>
<span><AiFillTwitterCircle/></span>
<span className='insta'><FaInstagram/></span>

</div>
</div>
<div className="footerQuickLinks">
  <h3>Quick Links</h3>
  <hr />
  <Link to='/home'>Home</Link>
  <Link to='/Login'>Hotels</Link>
  <Link to=''>About Us</Link>
  <Link to=''>Booking</Link>
  <Link to=''>Contact Us</Link>

</div>
<div className="footerInstagram">
  <h3 id="contactUs">Contact Us</h3>
  <hr />
  <MdLocationPin style={{color:"#1B6CC6"}}/> <span>1245 Hammanskraal</span> <br /> <br />
 <span>Telephone: (922)254 2554</span> <br /> <b></b>
 <span>Email: info@mandon.com</span> <b> <br /></b>
 <span>Time: 9.00am-4.00pm</span>

</div>




</div>
<div
className='copyright'>
 &copy;Website-2022|All Right Reserved.
</div>


    </div>
  )
}

export default HomeAll