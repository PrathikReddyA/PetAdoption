
import React, { useState } from 'react';
import './buttons.css'
import './modal.css';
function NewCatForAdoption() {
 const [modal, setModal] = useState("modal");
 const [display,setdisplay] = useState("")
function displayform(e){
    e.preventDefault();
    const formdata = new FormData(e.target);
    setdisplay(formdata);
    setModal("modal");
}
 return (
<div className='notify__page'>
    <div className='notify__display'>
        <div className='notify__text'>Please let us know if you know any kittens or grown cats in need of love and shelter.</div>
        
        <div className='adoption__details'>{display}</div>
        
        <button className='button__one' onClick={()=>setModal("showmodal")}>Notify Us!</button>
    </div>
<div className={modal}>

    <div class="modal__content">
        
    
    <form onSubmit={displayform}>
        <div className='modal__input'>
            <label for="name">Cat Name:</label>
            <input id="name" name="name" type="text" />
        
            <label for="email">Email Address of the form filler:</label>
            <input id="email" name="email" type="text"/>
        
            <label for="message">Enter details:</label>
            <textarea id="message" name="message" rows="6" cols="65" placeholder="Enter details such as location, contact, etc"></textarea>
        </div>
        <button className='button__one' type="submit">Submit</button>
        <button className='button__two' onClick={()=>setModal("modal")}>Close</button>
    </form>

  </div>
  </div>
</div>


 );
}
export default NewCatForAdoption;

