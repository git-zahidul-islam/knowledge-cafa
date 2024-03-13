
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [makeAsRead, setMakeAsRead] = useState(0);

  const handleBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog])
  }

  // make as read
  const handleMakeAsRead = (time, id) => {
    // console.log('readed button clicked', time)
    // setMakeAsRead(makeAsRead + time)
    const newReadTime = makeAsRead + time
    setMakeAsRead(newReadTime)
    // console.log('remove bookmark', id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-10'>
        <Blogs handleBookmarks={handleBookmarks} handleMakeAsRead={handleMakeAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} makeAsRead={makeAsRead}></Bookmarks>
      </div>
    </>
  )
}

export default App
