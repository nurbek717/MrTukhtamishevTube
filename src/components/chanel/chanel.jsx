import {Box, Container} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ApiServic} from "../../service/api.service"
import {ChanellCard , Videos} from "../"


function Chanel() {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams() 
  
  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiServic.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.data.items[0]) 
        const dataVideo = await ApiServic.fetching(`search?channelId=${id}&part=snippet&type=video`)
        console.log(dataVideo.data);
        
        setVideos(dataVideo.data.items) 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    
    getData()
  }, [id])
  
  
  
  return (
    <Box minHeight={'95vh'} mt={'1vh'}>
        <Box>
            <Box
              width={"100%"}
              height={"200px"}
              zIndex={10}
              sx={{
                backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
            </Box>
            <ChanellCard video={channelDetail} marginTop={'-100px'} />
        </Box>
        <Container maxWidth={'90%'}>
          <Videos videos={videos} />
        </Container>
    
    </Box>
  )
}

export default Chanel

