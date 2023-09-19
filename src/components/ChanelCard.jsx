import React from 'react'

import { Link } from 'react-router-dom'

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

export default function ChanelCard({ chanelDetail, marginTop }) {
  console.log(chanelDetail)
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop
    }}>
      <Link to={`channeldetail/${chanelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', textAlign: "center", color: '#fff'
        }}>
          <CardMedia
            image={chanelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={chanelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: 'solid 1px #e3e3e3' }}
          />
          <Typography variant='h6'>
            {chanelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {chanelDetail?.statistics &&
            <Typography variant='subtitle1' >
              {chanelDetail?.statistics?.subscriberCount} subscribes
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}
