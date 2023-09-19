import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {
  console.log('hello')
  const [videos, setVideos] = useState([])
  const  {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
  }, [searchTerm])

  return (

    <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for <span style={{ color: '#F31503' }}> {searchTerm} </span>
      </Typography>
      <Videos videos={videos} />

    </Box>


  )
}
