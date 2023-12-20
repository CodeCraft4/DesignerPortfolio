import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import TestimonailCard from './Slider/mainSlider'

const Event = () => {
  return (
    <div id='testimonial'>
        <Container maxWidth={'lg'} >
            <Box textAlign={'center'} mt={10}>
                <Typography
                 fontWeight={900}
                 fontSize={{md:"4em",sm:"4em",xs:'2.5em'}}
                 color={'orange'}
                 fontFamily={'fantasy'}
                 letterSpacing={'7px'}
                 pt={5}
                >Recent Feedback</Typography>
                <Typography
                color={'gray'}
                letterSpacing={{md:4,sm:4,xs:1}}
                fontWeight={{md:'bold',sm:'bold',xs:'lighter'}}
                >FOR ABOUT INFORMATION</Typography>
                <TestimonailCard/>
            </Box>
        </Container>
      
    </div>
  )
}

export default Event
