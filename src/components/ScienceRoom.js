import React, {useState} from 'react'
import Image from '../Images/science1.jpeg'

const ScienceRoom = () => {

    const [message, setMessage] =useState(true);

    const onClick =()=> {
        setMessage(!message);
    }

  return (
   
   <div>
  <h2>🔭 Dive into the Wonders of Science!</h2>
   <img src={Image} alt="science" width="400"/>
   <br/>

   <button className="button" onClick={onClick}> {message ? 'Discover More' : 'Hide'}</button>
   {!message ?<p>Legend says if you came across the Tang Dynasty-Gilt Standing Dragon he would grant you 3 wishes. However remember all magic comes with a price </p> : null}
   
   </div>
  )
}


export default ScienceRoom