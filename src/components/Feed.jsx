import {useState , useEffect} from 'react'
import {Box , Stack , Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () =>  (

  <Stack
    sx={{ flexDirection : { sx : "column" , md : "row"}}}>
      <Box
        sx = {{height:{sx: 'auto' , md : '92vh'}, borderRight : '1px solid #3d3d3d' , px:{sx : 0 , md:2}}}>
          <Sidebar/>
          <Typography className = "copyright" variant='body2' sx={{ mt:1.5 , color : '#ffff'}}>
          Copyright 2023 By Khan Media
      </Typography>
      </Box>

      <Box p={2} sx={{height:{sx: 'auto' , md : '90vh' , flex:2}}}>
          <Typography  
            variant='h4'
            fontWeight='bold'
            sx={{
              color: 'white'
            }}>
              New <span style={{color : '#FC1503'}}>Videos</span>

          </Typography>

          <Videos />

      </Box>

     

  </Stack>
  


)


export default Feed