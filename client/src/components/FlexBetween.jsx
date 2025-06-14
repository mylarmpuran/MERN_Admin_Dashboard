import { Box} from '@mui/material'
import { alignItems, justifyContent, styled } from '@mui/system'
import React from 'react'

const FlexBetween = styled(Box)(
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center"
    }
)

export default FlexBetween;
