import React, { useEffect, useState } from "react";

import HotelDataService from "../services/hotelservices";
import AddHotel from "./AddHotel";
const HotesList = ({ getHotelId }) => {
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
  return (
    <>
      <div className="refreshBtn">
      
      </div>
    {/* <AddHotel/> */}

      {/* <pre>{JSON.stringify(hotels, undefined, 2)}</pre>} */}
      <table className="center"  >
       <tr>
      <button className="" onClick={getHotels}>
       Refresh
     </button>
       </tr>
          <tr>
            <th>#</th>
            <th>Hotel Name</th>
            <th>Hotel Place</th>
            <th>Hotel Information</th>
            <th>Available Rooms</th>
            <th>No. Adult</th>
            <th>No. Children</th>
            <th>Bed Type</th>
            <th>Hotel Features</th>
            {/* <th>Status</th> */}
            <th>Cost</th>
            <th>Action</th>
          </tr>
      
     
          {hotels.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                 <td>{doc.place}</td>
                <td>{doc.infor}</td>
                <td>{doc.rooms}</td>
                <td>{doc.adult}</td>
                <td>{doc.children}</td>
             
                <td>{doc.bedType}</td>
                <td>{doc.aircon}{doc.wifi}{doc.hairDry}{doc.laundry}{doc.minibar}{doc.telephone}</td>
                {/* <td>{doc.status}</td> */}
                <td>R{doc.price}</td>
                <td>
                  <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getHotelId(doc.id)}
                  >
                    Edit
                  </button>
                  <button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
    
      </table>
    </>
  );
};

export default HotesList;
