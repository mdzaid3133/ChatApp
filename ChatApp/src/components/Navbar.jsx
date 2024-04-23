import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
     <span className='brand'>Z-Chat</span>
     <div className='rightBox'>
     <span className='logo'><img  src='https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg' alt='profile pic'/></span>
     <span className='username'>Md Zaid</span>
     <button>Logout</button>
     </div>
    </div>
  )
}

export default Navbar