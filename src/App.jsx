import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import {Feed, Navbar, VideoDetail, SearchFeed, ChanelDetail} from './components'

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }} >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channeldetail/:id' element={<ChanelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
