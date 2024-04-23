import React from 'react'

function Search() {
  return (
    <div className='search'>
     <div className='searchForm'>
     <input
     className='searchInput'
     type='text' placeholder='Find a user' name='search'/>
     </div>

     <div className='userChat'>
       <img src='https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg' alt='profile pic'/>
       <div className='userInfo'>
        <span>Zaid</span>
       </div>
     </div>
    </div>
  )
}

export default Search