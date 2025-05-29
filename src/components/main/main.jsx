import { useState , useEffect } from 'react'
import { Box, Container, Stack ,Typography} from '@mui/material'
import { colors} from '../../constants/colors'
import { Category , Videos } from '../'
import { ApiServic } from '../../service/api.service'

export default function Main() {
 const [selectedCategory, setSelectedCategory] = useState("New")
 const [videos, setVideos] = useState([])

 const selectedCategoryHandle = category => setSelectedCategory(category)


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServic.fetching(`search?part=snippet&q=${selectedCategory} `);
        setVideos(data.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    getData()
}, [selectedCategory])
  return (
<Stack>
  <Category selectedCategoryHandle = {selectedCategoryHandle}
     selectedCategory = {selectedCategory}
  />

  <Box p={2} sx={{ height:"90vh"} }>
  <Container maxWidth={'90%'}>
    <Typography variant='h4' fontWeight={'bold'} mb={2}>
      {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
    </Typography>
  <Videos videos={videos} />
  </Container>
  </Box>
  
</Stack>
   
  )
}
