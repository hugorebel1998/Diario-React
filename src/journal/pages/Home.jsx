import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { Note, NothingSelected } from '../view'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

export const Home = () => {
    return (
        <JournalLayout>

            <NothingSelected />
            {/* <Note /> */}


            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>
        </JournalLayout>
    )
}
