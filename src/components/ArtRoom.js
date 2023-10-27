import React, {useState} from 'react'


const ArtRoom = () => {
    const [message, setMessage] =useState(true);

    const onClick = ()=> setMessage(!message);


  return (
    <div>
   <h2>🎨 Explore the World of Art!</h2>
   <img src="https://assets.sutori.com/user-uploads/image/0331a412-3dff-406e-8cd7-17ed1476314d/5d8156047e1a17da96a7bab4c2325bca.jpeg" alt="surrealism"/>
   <br/>
   
   <button onClick={onClick}> {message ? 'Discover' : 'Hide'}</button>
   {!message ?<p>Let me tell you a story</p> : null}
   
   </div>
  )
}

export default ArtRoom