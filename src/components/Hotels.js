import React,{useState ,useEffect} from 'react';
import HotelDataService from "../services/hotelservices";

import{GiPerson} from 'react-icons/gi'
import{BsHouseDoorFill} from 'react-icons/bs'
import{FaBed} from 'react-icons/fa'
import{AiFillStar} from 'react-icons/ai'
import{MdLocationPin} from 'react-icons/md'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import {Link} from 'react-router-dom';


import {v4}  from 'uuid' 

import r3 from './img/r3.jpg';
import bckimg2 from './img/bckimg2.jpg';
import bckimg5 from './img/bckimg5.jpg';
import bckimg6 from './img/bckimg6.jpg';
import bckimg7 from './img/bckimg7.jpg';
import bckimg8 from './img/bckimg8.jpg';
import bckimg9 from './img/bckimg9.jpg';
import bckimg10 from './img/bckimg10.jpg';
import { db,storage } from "../firebase";
import{ ref,uploadBytesResumable, getDownloadURL, uploadBytes, listAll} from 'firebase/storage'
import { getDoc } from 'firebase/firestore';
function Hotels({ getHotelId }) {
  
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
  const [showLinks,setShowLinks]= useState(false)




  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const data = await HotelDataService.getAllHotels();
    console.log(data.docs);
    setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  const bookNow = async (id) => {
    navigate("/booknow",{state:{id:id}})
  };

  ////


  const [imageUpload,setImageUpload]= useState(null);
  const [imageList,setImageList]= useState([]);
  
  const imageListRef= ref(storage,"images/")
  const uploadImage=()=>{
    if(imageUpload== null) return;
    const imageRef =ref(storage, `images/${imageUpload.name + v4()}`);
  uploadBytes(imageRef, imageUpload).then((snapshot)=>{
    getDownloadURL(snapshot.ref).then((url)=>{
       setImageList((prev)=>[...prev, url]);
     })
   
     alert("Image upLoaded")
  })
  
  };
  useEffect(() => {
  
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev, url]);
        });
  
      })
    })
    
  }, []);
  
const [searchTerm,setSearchTerm]=useState(0)
  
  

  return (
    <div className='containerHotel'>
      <div className='Navbar'>
      
      <div className='leftSide'>
      <div className='links' id={showLinks ? "hidden": ""}>
      <Link className='' to="/home">Home</Link>
      <Link className='' to="/Hotels">Hotels</Link>
      {/* <Link className='' to="/Dining">Dining & Bar</Link> */}
     
     {/* <Link className='' to="/Login">LogIn</Link>
        <Link className='' to="/signup">Register</Link> */}
  
      </div>
      <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
      </div>
       <div className='rightSide'>
{/*           
      <input type="text"  placeholder='Search...'/>
      <button>Search</button> */}
      <button variant="primary" onClick={handleLogout}>
        Log out
      </button> 
      <div className='userAcc'>   {user && user.email}</div>
     
      </div>
  </div>
<div className='Hotels'>
    <div className='RoomHEADINGS'>
    <div>
     <input type="text" 
      placeholder='Type Location or amount...'
      onChange={(e)=>{
        setSearchTerm(e.target.value)
      }}
     
     /> 
    </div>
   
    <h1>Hotels</h1>
    <p>The hotel is arranged on three floors, without a lift. On the ground floor, apart from the reception, </p>
<p>there is a comfortable lounge where you can sit and drink tea.
</p>
    

    



    </div>
  
{hotels.filter((val)=>{
if(searchTerm=='')
{
  return val
}
else if(val.place.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
{
return val
}
else if(val.price.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
{
return val
}
}).
  map((doc,index)=>{

  return(
    <div className='ROOMS' key={doc.id}>
    <div className='RoomImg'>
       <img src={doc.imageList} alt="" />
     </div>
      
     <div className='RoomDetails'>
       <hr />
       <h5>{doc.name}</h5>
       <p><span className='hotelIcons'></span> <MdLocationPin style={{color:"red"}}/> <span style={{color:'gray'}}> {doc.place}</span></p>
       <p>{doc.infor}</p>
      <br />
       
      <span className='spanSpace'><span className='hotelIcons'><BsHouseDoorFill/></span> <span className='spanDetails'>No. Rooms:{doc.rooms}</span> </span>
     <br />
     
      <span className='spanSpace'><span className='hotelIcons'><GiPerson/></span> <span className='spanDetails'>Adults:{doc.adult}</span> </span>
     <br />
     
     <span className='spanSpace'><span className='hotelIcons'><GiPerson/></span> <span className='spanDetails'>Children:{doc.adult}</span> </span>
      <br />
     
      <span className='spanSpace'><span className='hotelIcons'><FaBed/></span> <span className='spanDetails'>Bed Type:{doc.bedType}</span> </span>
      <br />
      <span className='spanSpace'><span className='hotelIcons'><AiFillStar/></span> <span className='spanDetails'>Amenities:{doc.features}</span> </span>
      <br />
      <br />
      <h4>R{doc.price}.00<span className='perNigt'>/per night</span></h4>


      <button className='BOOKbtn'onClick={()=> bookNow(doc)} >BOOK</button>

      </div>

      






    </div>

  )
})}

      

      
    


</div>


    

  
</div>

  )
}

export default Hotels
