import React, { useState, useEffect ,useRef} from "react";

import HotelDataService from "../services/hotelservices";

import { db,storage } from "../firebase";
import{ ref,uploadBytesResumable, getDownloadURL, uploadBytes, listAll, list} from 'firebase/storage'
import {v4}  from 'uuid' 
import HotelList from '../components/HotelList';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const AddHotel = ({ id, setHotelId },props) => {
 
  
  const getHotelIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setHotelId(id);
  };

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const[infor,setInfor]=useState("Standard Single Rooms are designed in open-concept living area and have many facilities.");
  const [rooms,setRooms]=useState(0);
  const[adult,setAdult]=useState(0)
  const[children,setChildren]=useState(0)
  const[bedType,setBedtype]=useState("")
   const [price,setPrice] = useState(0.00);
   const [features,setFeatures] = useState("");
   const [aircon,setAircon] = useState("");
   const [hairDry,setHairdry] = useState("");
   const [laundry,setLaundry] = useState("");
   const [wifi,setWifi] = useState("");
   const [minibar,setMinibar] = useState("");
   const [telephone,setTelephone] = useState("");

   
  
   const [type,setType] = useState("Single");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  //iMAGE WORKIN 
//    const [progress, setProgress]= useState(0)
//   const [uploadImage,setUploadImage]=useState(null)
//    let [hotelImage,sethotelImage]=useState ('')
//    const file=''

//    const handleImage=(e)=>{
//        setUploadImage(e.target.files[0])
//        uploadedImage(uploadImage)
//    }

//  function uploadedImage(uploadImage){
//     if(!uploadImage) return;
//    const imageRef= ref(storage, `images/${uploadImage.name +v4()}`);
//    const uploadTask= uploadBytesResumable(imageRef,uploadImage);
//     uploadTask.on('state_changed',(snapshot)=>{
//       const prog =Math.round(snapshot.bytesTransferred/ snapshot.totalBytes*100)
//      setProgress(prog)
      
//    },(err)=> console.log(err),
//     ()=>{
//         getDownloadURL(uploadTask.snapshot.ref)
//         .then(url=>{
//           sethotelImage(url)
//         })      
//    }
//      )

//   }

      /** ENDiMAGE WORKIN */


//pedro
const [imageUplod, setImageUpload]=useState(null)
const [imageList,setImageList]=useState([])

const imageListRef= ref(storage,"images/")
const uploadImage=()=>{
  if(imageUplod==null) return;
  const imageRef= ref(storage,`images/${imageUplod.name + v4()}`);
  uploadBytes(imageRef,imageUplod).then (()=>{
    alert("imageUploded")
  })



}
useEffect(()=>{
  listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev,url])
        })
      })
  })
},[])
//end pedro

  const handleSubmit = async (e) => { 
    e.preventDefault();

    setMessage("");
    if (name === "" || place === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newHotel = {
      name,
      place,
      infor,
      rooms,
      adult,
      children,
      bedType,
      features,
      aircon,
      wifi,
      hairDry,
      laundry,
      minibar,
      telephone,
      imageList,
    // hotelImage,
    price,
      type,
      status,
    };
    console.log(newHotel);

    try {
      if (id !== undefined && id !== "") {
        await HotelDataService.updateHotel(id, newHotel);
        setHotelId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await HotelDataService.addHotels(newHotel);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setPlace("");
    setInfor("");
    setRooms(0);
    setAdult(0);
    setChildren(0);
    setBedtype("")
  setFeatures("")
  setAircon("")
  setWifi("")
  setHairdry("")
  setLaundry("")
  setMinibar("")
  setTelephone("")
    setPrice(0);
    //setImageUpload(null)
 };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await HotelDataService.getHotel(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setPlace(docSnap.data().place);
      setInfor(docSnap.data().infor);
      setRooms(docSnap.data().rooms);
      
       setAdult(docSnap.data().adult);
      //  sethotelImage(docSnap.data().hotelImage);
       setImageList(docSnap.data().imageList);
      setChildren(docSnap.data().children);
      setBedtype(docSnap.data().bedType);
      setFeatures(docSnap.data().features);
      setWifi(docSnap.data().wifi);
      setHairdry(docSnap.data().hairDry);
      setLaundry(docSnap.data().laundry);
      setMinibar(docSnap.data().minibar);
      setTelephone(docSnap.data().telephone);
      setAircon(docSnap.data().aircon);
    
     setPrice(docSnap.data().price);
      setType(docSnap.data().type);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>

      <div className="addForm">
 
      <HotelList getHotelId={getHotelIdHandler}/>  
        <form onSubmit={handleSubmit} style={{maxWidth:"500px",margin:'auto'}} className="forms">
         <h2>Add Hotels</h2><br />
{/*         
        
        <input type="file"
        id={props.id}
        ref={filePickerRef}
        style={{display:'none'}}
        
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}

        
        />
        <div  className={`image-upload ${props.center && "center "}`}>
          <div className="image-upload__preview">
            {previewUrl &&<img src={previewUrl} style={{width:'80px'}}/>}
            {!previewUrl &&(
              <div className="center">
                <button className="image-upload" type='button' onClick={pickedImageHandler}>+ </button>
              </div>
            )}

          </div>
        
          {previewUrl &&(
              <div className="center">
                <button className="image-upload" type='button' onClick={pickedImageHandler} style={{color:'red'}}>

                  edit
                </button>
              </div>
            )}

        </div>
         */}
        <br />
        
        <label htmlFor="">Hotel Name</label>
         <div class="input-container">

         <select name="" id=""
         class="input-field"  type="text"  placeholder="Hotel Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
         >
          <option value={""}>Name Of Hotel</option>
          <option value={"Hotel Hilton"}>Hotel Hilton</option>
          <option value={"Forte Do Vale"}>Forte Do Vale</option>
          <option value={"Gran Canaria"}>Gran Canaria</option>
          <option value={"Roosevelt Hotel"}>Roosevelt Hotel</option>
          <option value={"Costa Brava"}>Costa Brava</option>
          <option value={"Ruzzini Palace"}>Ruzzini Palace</option>
          <option value={"Plaza Tour"}>Plaza Tour</option>
          <option value={"Park Central"}>Park Central</option>
          <option value={"Grand Hotel"}>Grand Hotel</option>
          <option value={"Hotel Dore"}>Hotel Dore</option>
          <option value={"Brisa Sol"}>Brisa Sol</option>
          


         </select>
         </div>

       
  <label htmlFor="">Hotel Location</label>

  <div class="input-container">

         <select name="" id=""
         class="input-field"  type="text"  placeholder="Hotel Name"
         value={place}
         onChange={(e) => setPlace(e.target.value)}
         required
         >
          <option value={""}>Hotel Location</option>
          <option value={"Arcadia"}>Arcadia</option>
          <option value={"Brooklyn"}>Brooklyn</option>
          <option value={"Lynnwood"}>Lynnwood</option>
          <option value={"Sunnyside"}>Sunnyside</option>
          <option value={"Hatfield"}>Hatfield</option>
          <option value={"Centurion"}> Centurion</option>
          <option value={"Silverton"}>Silverton</option>
          <option value={"Ga-rankuwa"}>Ga-rankuwa</option>
          <option value={"Montana"}>Montana</option>
          <option value={"Rosslyn"}>Rosslyn</option>
          <option value={"Atteridgeville"}>Atteridgeville</option>
          <option value={"Hammanskraal"}>Hammanskraal</option>
          <option value={"Rooiwal"}>Rooiwal</option>
          <option value={"Dinokeng"}>Dinokeng</option>
          <option value={"Danville"}>Danville</option>
          
                   </select>
         </div>



<label htmlFor="">Hotel Information</label>

  <div class="input-container">

         <textarea class="input-field"  type="text"  placeholder="Hotel Information"
          value={infor}
          onChange={(e) => setInfor(e.target.value)
          }
          required
          />
         
         </div>
<h5>Hotel Features</h5>         
 
<input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={"air-conditioning"}
 onChange={(e) => setAircon(e.target.value)

 }
 required
 />
 &nbsp;&nbsp;
 <label htmlFor="">air-conditioning</label>

 &nbsp;&nbsp;
 <input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={",free wi-fi"}
 onChange={(e) => setWifi(e.target.value)
 }

 />
 &nbsp;&nbsp;
 <label htmlFor="">free wi-fi</label>


 &nbsp;&nbsp;
 <input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={',hairdryer in-room safety'}
 onChange={(e) => setHairdry(e.target.value)
 }

 />
 &nbsp;&nbsp;
 <label htmlFor="">hairdryer in-room safety</label>
<br />
 
 <input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={',laundry'}
 onChange={(e) => setLaundry(e.target.value)
 }

 />
 &nbsp;&nbsp;
 <label htmlFor="">laundry</label>

 &nbsp;&nbsp;
 <input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={',minibar'}
 onChange={(e) => setMinibar(e.target.value)
 }

 />
 &nbsp;&nbsp;
 <label htmlFor="">minibar</label>
 
 &nbsp;&nbsp;
 <input class="inputCheckBox"  type="checkbox"  placeholder="Hotel Features"
 value={', telephone'}
 onChange={(e) => setTelephone(e.target.value)
 }

 />
 &nbsp;&nbsp;
 <label htmlFor="">telephone</label>

<br />


<label htmlFor="">No. Rooms</label>
         
         <div class="input-container">

         <select name="" id=""
         class="input-field"  type="text"  placeholder="Hotel Information"
         value={rooms}
         onChange={(e) => setRooms(e.target.value)}
         required
         >
          <option value={0}>Number Of Rooms available</option>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>



         </select>
         </div>
<label htmlFor="">No. Adult</label>
         
         <div class="input-container">

         <select name="" id=""
         class="input-field"  type="text"  placeholder="Hotel Information"
         value={adult}
         onChange={(e) => setAdult(e.target.value)}
         required
         >
          <option value={null}>Adult</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>



         </select>
         </div>
         <label htmlFor="">No. Children</label>

          <div class="input-container">

         <select name="" id=""
         class="input-field"  type="text"  placeholder="Hotel Information"
         value={children}
         onChange={(e) => setChildren(e.target.value)}
         required
         >
          <option value={null}>Children</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>



         </select>
         </div>

<label htmlFor="">Bed Type</label>
            
          <div class="input-container">

<select name="" id=""
class="input-field"  type="text"  placeholder="Hotel Information"
value={bedType}
onChange={(e) => setBedtype(e.target.value)}
required
>
 <option value={null}>Bed Type</option>
 <option value={"Queen"}>Queen</option>
 <option value={"King"}>King</option>
 <option value={"Cal King"}>Cal King</option>
 <option value={"Round Bed"}>Round Bed</option>
 <option value={" Hanging Bed"}> Hanging Bed</option>



</select>
</div>

                       
                       

      <label htmlFor="">(R)Cost</label> 
      <div class="input-container">
        <input type="number"   placeholder="H" 
          value={price} step={0.01}
          onChange={(e) => setPrice(e.target.value)}  required/> 
          

  

         

          </div>

         
          
          <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
         <button type="Submit" onClick={uploadImage}>Upload Images</button>
         {imageList.map((url)=>{
          return(
            <img src={url} alt="" width='200px' />
          )
         })}
           {/* <input type="file" onChange={handleImage} name='uploadImage' value={file} />  
          {progress} %  */}
          <div className="">
           {/* <button type="Submit"/* disabled={progress !== null && progress< 100}   >
               Add/ Update 
          {/*</button>*/} 
          </div> 
        </form>
             </div>
    </>
  )
}

export default AddHotel;
