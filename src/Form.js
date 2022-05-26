import React, { useState } from 'react';
// import moment from 'moment'
// import './Form.css'
import {useNavigate} from 'react-router-dom';


function Form() {
  const[file,setFile]=useState('')
  const [name,setAuthor]=useState('')
  const[location,setLocation]=useState('')
 const[description,setDescription]=useState('')

 const navigate = useNavigate();
  const imageUpload=(event)=>{
    // console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  
  async function post(event){
    event.preventDefault()
    const formData=new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    
    formData.append("image", file);
  
     fetch('https://instagram-backend333.herokuapp.com/post',{
      method:'POST',
      headers:{ },
      body: formData,
      
    })
   
    .then((response) => response.json())
    .then((data) => console.log(data))
    // .then(alert("Post created successfully"))
    .then(navigate('/Postview'))
  
  }
  

  return (
    
    
      <div className='main'>
        <center>
        
        <form onSubmit={post} encType='multipart/form-data' action='/Postview'>

                  <input type="file" id='file' name='image' 
                  onChange={imageUpload}class='input' placeholder='No file chosen' required/>
           <div className='middle'>
                  <input type="text" id='author'  value={name}
                  onChange={(e)=>setAuthor(e.target.value)} class='input' placeholder='Author' required/>
                  <input  type="text" id='location'  value={location}
                   onChange={(e)=>setLocation(e.target.value)} class='input' placeholder='Location' required/>
            </div>  
                  <input type="text" id='description'  value={description}
                  onChange={(e)=>setDescription(e.target.value)} class='input' placeholder='Description' required/><br></br><br></br>
            
            
              <button type='submit' id='btn1'>Post</button>
              
        </form>
        </center>
      </div>

  )
}

export default Form;