
import React,{useState ,useEffect} from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import {Link} from 'react-router-dom';
import HotelDataService from "../services/hotelservices";
import{MdLocationPin} from 'react-icons/md'
import{HiOutlineWifi} from 'react-icons/hi'
import{MdRoomService} from 'react-icons/md'
import{AiFillCar} from 'react-icons/ai'
import{GiHouseKeys} from 'react-icons/gi'
import{TiSocialFacebookCircular} from 'react-icons/ti'
import{AiFillTwitterCircle} from 'react-icons/ai'
import{FaInstagram} from 'react-icons/fa'

//Import Images
import bckimg2 from './img/ROOMS (11).jpg';
import spar1 from './img/SPAR (4).jpg';
import spar2 from './img/ROOMS.jpg';
import spar3 from './img/SPAR (5).jpg';
import Rooms from './img/ROOMS (10).jpg';
import Team1 from './img/TEAMS (1).jpg';
import Team2 from './img/TEAMS (2).jpg';
import Team3 from './img/TEAMS (3).jpg';
import Team4 from './img/TEAMS (1).webp';



const Home = ({ getHotelId }) => {
//For listing
const [hotels, setHotels] = useState([]);
  useEffect(() => {
  
    getHotels();
  }, []);

  const getHotels = async () => {
    const data = await HotelDataService.getAllHotels();
    console.log(data.docs);
    setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await HotelDataService.deleteHotel(id);
    getHotels();
  };
  //end list



  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
         } catch (error) {
      console.log(error.message);
    }
  };
  const allHotels=()=>{
      navigate("/hotels")


  }



  const [showLinks,setShowLinks]= useState(false)
  return (
    <> 

      <div className="">
      <div className='userAcc'>   {user && user.email}</div> &nbsp; 
      <div className='Navbar1' /* style={{backgroundColor:"#0E375C"}} */>
      
        <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden": ""}>
          {/*  <Link className='' to="/">Home</Link>*/}
        <Link className='' to="/Hotels">Hotels</Link>
        {/* <Link className='' to="/Dining">Dining & Bar</Link> */}
        <a href="#section2">About Us</a>
        <a href='#contactUs'>Contact Us</a>
       {/* <Link className='' to="/Login">LogIn</Link>
          <Link className='' to="/signup">Register</Link> */}
    
        </div>
        <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
        </div>
         <div className='rightSide'>
{/*           
        <input type="text"  placeholder='Search...'/>
        <button>Search</button> */}
         <Link className='BookingsLink' to="/bookings">Bookings</Link> 
 
         <button className='logoutBtn' onClick={handleLogout}>
          Log out
        </button>
      
       
        </div>
    </div>

    
<div className="main1LogIn" id="section1" > 
     <div className='text' style={{color:""}}>
        {/* <h1 style={{color:"#0E375C"}} >MANDON HOTEL <br />
        Holidays With Us</h1> <br />
        <h2>Book Room with All Inclusive <br /> <span className='middletxt'> Hotel & Resort</span></h2>
         */}
        </div>
</div>

 <div className='HomeAboutUs'  id="section2">
  <div className='HomeAboutUsLeft'>
    <h1>About Us</h1>
    <p>Here, we always make sure that you will have any of your needs satisfied, be it a comfortable hotel room with a strong WiFi signal and a diligent room service, a dining and lounge zone or any additional amenities a traveller might want…

That’s all on top of the delicious continental breakfast we serve at our B&B every single morning!</p>

  </div>
  <div className='HomeAboutUsRight'>
   <img src={bckimg2} alt="" />
 
  </div>

  <div className='HomeAboutUsLeftt' style={{marginTop:"40px"}}>
    <img src={Rooms} alt=""/* style={{width:'400px', height:'500px'}}  *//>
    <div className='icon1'>
<HiOutlineWifi color='#D8BB8E' fontSize={50} ma/>
<br /> <br />
<h5>Free WiFi</h5>
<br /> <br />
<GiHouseKeys  color='#D8BB8E'fontSize={50}/>
<br /> <br />
<h5>Room Service</h5>

</div>
<div className='icon1'>
<AiFillCar  color='#D8BB8E' fontSize={50} ma/>
<br /> <br />
<span className='Free'><h5>Free Parking Lots</h5></span>

<br /> <br />
<MdRoomService  color='#D8BB8E'fontSize={50}/>
<br /> <br />
<span className='Early'><h5>Early check-in, late check-out</h5></span>


</div>
  </div>
  <div className='HomeAboutUsRight'>

<div className='HomeAboutUsRightIcons'>

</div>
    
 
  </div>

 </div>

 {/* SECTION 4 */}


 <div className='BigRoomDisplay'>
 <div className='DisplayHeader'>
 <h1>Rooms</h1>
    <p>Roy Bed & Breakfast Hotel has 35 elegantly furnished and air conditioned classic rooms, <br /> which will be a perfect pick both for business and leisure travelers…</p>


</div>

  <div className="DisplayLeft">
   
    <img src={bckimg2} alt=""/>
 


  </div>

  <div className="DisplayRight">
    
    <button onClick={allHotels}>Book A Room</button>
    <br /> <br />
    <h1>Suite</h1>
    <br />
    <p>Enjoy our classic with all the elegancy and comfort that  <br /> its interior has… It features  such essentials as a flat- <br />screen 45″ TV, WiFi and 2 bathrooms with a living room <br /> and 2 bedrooms…</p>
    <br />
    <hr /> <div className='div'>Only 5 rooms are available</div> 
    <hr />  <div className='div'>Breakfast included</div>  
    <hr />  <div className='div'> Price does not include VAT & services fee</div> 

  </div>
  {/* Sectiong */}



 </div>
 <div className='spar'>
<div className='sparLeft'>
<img src={spar2} alt="" />


</div>
 <div className='sparRight'>
  <p>     Besides our main services, we always have a lot of extra amenties to offer.Starting with the free parking and Wifi to a SPA center and a Conference hall, we can make all of your wishes come true!
 </p>
     
 

 <span>Book a SPA Service  <br /> Now &  GET a <br /> FREE Airport shuttle </span>
  <br /><br />
<p>We're so determined to make your experience at our hotel a charm, that we'd love to provide you with a courtesy airport shittle
</p>
<h5>Price start at</h5>

<h1>R249</h1>
  
 </div>


</div>
{/* our Team section */}
<div className='ourTeam'>
  <div className="ourTeamHeader">
<h1>Our Team</h1>
<hr />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
  </div>
  <div className='ourTeamImg'>
    <div>
    <img src={Team1} alt="" />
<h3 >Theo James</h3>
    </div>
    <div>
    <img src={Team2} alt="" />
<h3 >Lyndsy Fonseca</h3>
    </div>
   
    <div>
    <img src={Team3} alt="" />
<h3 >Maggie Q</h3>
    </div>
   
    <div>
    <img src={Team4} alt="" />
<h3 >Noah Bean</h3>
    </div>
   
    
    
    
    
  </div>

</div>
<div className="footer">
<div className="footerAbtUs">
  <h3>About Us</h3>
  <hr />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
<div>
<span className='fb'><TiSocialFacebookCircular/> </span>
<span><AiFillTwitterCircle/></span>
<span className='insta'><FaInstagram/></span>

</div>
</div>
<div className="footerQuickLinks">
  <h3>Quick Links</h3>
  <hr />
  <Link to=''>Home</Link>
  <Link to=''>Hotels</Link>
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
      
    </>
  );
};

export default Home;
