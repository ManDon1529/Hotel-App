import React,{useState ,useEffect} from 'react';
import HotelDataService from "../services/hotelservices";
import Rooms1 from './img/ROOMS (1).jpg';
import Rooms2 from './img/ROOMS (2).jpg';
import Rooms3 from './img/ROOMS (3).jpg';
import Rooms4 from './img/ROOMS (4).jpg';
import Rooms5 from './img/ROOMS (5).jpg';
import Rooms6 from './img/ROOMS (6).jpg';
import Rooms7 from './img/ROOMS (7).jpg';
import Rooms8 from './img/ROOMS (8).jpg';
import Rooms9 from './img/ROOMS (9).jpg';
import{MdLocationPin} from 'react-icons/md'


import{GiPerson} from 'react-icons/gi'
import{BsHouseDoorFill} from 'react-icons/bs'
import{FaBed} from 'react-icons/fa'
import{AiFillStar} from 'react-icons/ai'

export const ViewAll = () => {

        


  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const data = await HotelDataService.getAllHotels();
    console.log(data.docs);
    setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  return (
 <div className='mapflex'>
    {hotels.map((doc,index)=>{
        return(
                <div className='ViewAllPage'  >

                <div className='ViewAllRoom1'>
                <div>
               
                jjj
                </div>
                <div className='ViewAllRoomDetails'>
                        <div className='v1'>
                             <h5>{doc.name}</h5>
                            <div  style={{marginTop:"-10px"}}>
                             <MdLocationPin style={{color:"#1B6CC6"}}/> <span>{doc.place}</span>
                            </div>
                        </div>
                
                        <div className='v2'>
                                 <p>AV/NIGHT</p> 
                  
                                <h6 style={{marginTop:"-17px"}}>R {doc.price}.00</h6>
                        </div>
                
                </div>
                <div className='ViewAllRoomDetails2'>
                <div className='v3'>
                <span className='spanSpace'><span className='hotelIcons'><BsHouseDoorFill/></span> <span className='spanDetails'>No. Rooms:{doc.rooms}</span> </span>
                <br />
                
                 <span className='spanSpace'><span className='hotelIcons'><GiPerson/></span> <span className='spanDetails'>Adults:{doc.adult}</span> </span>
                <br />
                
                <span className='spanSpace'><span className='hotelIcons'><GiPerson/></span> <span className='spanDetails'>Children:{doc.adult}</span> </span>
                 <br />
                
                 <span className='spanSpace'><span className='hotelIcons'><FaBed/></span> <span className='spanDetails'>Bed Type:{doc.bedType}</span> </span>
                 <br />
                 <span className='spanSpace'><span className='hotelIcons'><AiFillStar/></span> <span className='spanDetails'>Amenities: {doc.aircon} {doc.hairDry}{doc.laundry}{doc.wifi}{doc.minibar}{doc.telephone}</span> </span>
                 <br />
                
                </div>
                <div className="v4">
                
                <button>Book</button>
                
                </div>
                
                
                
                </div>
                
                  <hr />
                
                </div>
                    
                    </div>
        )
    })}

    </div>  )
}
