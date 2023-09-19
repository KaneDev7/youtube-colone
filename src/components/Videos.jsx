import React from 'react'
import { Stack, Box } from '@mui/material'

import {VideoCard, ChanelCard} from '../components'


export default function Videos({videos, direction}) {
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' gap={2} justifyContent='start'>
      {videos?.map((item, idx) =>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChanelCard chanelDetail={item} /> }
        </Box>
      ))}
    </Stack>
  )
}
