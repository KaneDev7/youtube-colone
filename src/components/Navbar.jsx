import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{ position: 'sticky', background: '#000', justifyContent: 'space-between', top: 0 }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar/>
    </Stack>
  )
}
