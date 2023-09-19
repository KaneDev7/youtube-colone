import React, { useEffect, useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

import Videos from './Videos'

export default function VideoDetail() {

  const [videoDetail, setVideoDetai] = useState(null)
  const [videos, setVideos] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setVideoDetai(data?.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=vidoe`)
      .then(data => setVideos(data?.items))

  }, [id])

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player'
            />

            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2} >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`} >
                <Typography
                  color='#fff'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center' >
                <Typography variant='body1' sx={{ opacity: 0.7 }} >
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>

                <Typography variant='body1' sx={{ opacity: 0.7 }} >
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>


    </Box>
  )
}
