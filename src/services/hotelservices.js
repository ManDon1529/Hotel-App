import { db } from "../firebase";



import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


  const hotelCollectionRef= collection(db,"hotels")
  class  HotelDataService{

        addHotels =(newHotel)=>{
          return addDoc(hotelCollectionRef,newHotel);
        }

        updateHotel = (id, updatedHotel) => {
            const hotelDoc = doc(db, "hotels", id);
            return updateDoc(hotelDoc, updatedHotel);
          };

          deleteHotel= (id) => {
            const hotelDoc = doc(db, "hotels", id);
            return deleteDoc(hotelDoc);
          };
          getAllHotels = () => {
            return getDocs(hotelCollectionRef);
          };

          getHotel = (id) => {
            const hotelDoc = doc(db, "hotels", id);
            return getDoc(hotelDoc);
          };
            



   }

  export default new HotelDataService();