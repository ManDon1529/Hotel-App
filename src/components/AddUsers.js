import React,{useState,useEffect} from 'react'
import { db, storage } from '../firebase'
import { useParams,useNavigate } from 'react-router-dom'


import{getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { async } from '@firebase/util';
const initialState={
    name:"",
    email:"",
    info:"",
    contact:""

}

const AddUsers = () => {

    const [data,setData]=useState({});
   
    const{name,email,info,contact}=data;
    const [file,setFile]=useState(null);
    const [progress,setProgress]=useState(null);
    const [errors,setErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    useEffect(()=>{
const uploadFile=()=>{

    const name=new Date().getTime() +file.name;
    const storageRef= ref(storage,file.name)
    const uploadTask= uploadBytesResumable(storageRef,file);

    uploadTask.on("state_changed",(snapshot)=>{
        const progress=(snapshot.bytesTransferred / snapshot.totalBytes) *100;

        setProgress(progress);
        switch(snapshot.state){
            case 'paused':
                console.log("uploade is paused");
                break;
                case 'running':
                console.log("upload is running");
                break;
                default:
                    break;
        }
    } ,(error)=>{
console.log(error)
    },
    ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{

                setData((prev)=>({...prev,img: downloadUrl}))

        })
    }
    
    )

}

file && uploadFile()
    },[file])



    const handleChange= (e)=>{

setData({...data,[e.target.name]: e.target.value})




    }

 

    const handleSubmit=async (e)=>{
        e.preventDefault();


        await addDoc(collection(db, 'donnxxs'),{
            ...data,timestamp :serverTimestamp()
        })

      
    }
  return (
    <div>
   {/**{isSubmit ?<Loader active inline="centered" size="huge"/>:(
       */}  <>
       <h2>Add user</h2>
       <form  onSubmit={handleSubmit}>
       
       <label htmlFor="">Name</label>
       <input type="text" placeholder='Enter name' name onChange={handleChange}
        
       autoFocus
       
       />

       
       
    

       

       <input type="file" 
       
    onChange={(e)=>setFile(e.target.files[0])}
      
       
       />
       <button type="submit "
       disabled={progress !==null && progress<100}
       > Submit</button>
       
       </form>
       </>
  

    
    
    </div>
  )
}

export default AddUsers