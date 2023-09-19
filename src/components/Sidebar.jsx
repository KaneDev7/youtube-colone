import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import IconComponent from './IconComponent'

export default function Sidebar({ setSelectedCategory, selectedCategory }) {

    return (
        <Stack
            direction='row'
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((categorie, index) => (
                <button
                    onClick={() => setSelectedCategory(categorie.name)}
                    className='category-btn'
                    key={categorie.name + index} style={{
                        background: categorie.name === selectedCategory && "#FC1503",
                        color: 'white'
                    }} >
                    <IconComponent color={categorie.name === selectedCategory ? "white" : '#FC1503'} 
                    iconName={categorie.icon} selectedCategory={selectedCategory} />
                    <span style={{ 
                        opacity: categorie.name === selectedCategory ? 1 : 0.8 ,
                     
                        }} >
                        {categorie.name}
                    </span>
                </button>

            ))}
        </Stack>
    )
}
