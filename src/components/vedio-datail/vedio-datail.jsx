import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {ApiServic} from "../../service/api.service"
import { Avatar, Box ,Chip, Stack, Typography  } from "@mui/material"
import {Tag, Visibility ,FavoriteOutlined , MarkChatRead, CheckCircle }from '@mui/icons-material';
import ReactPlayer from "react-player"
import {Videos} from "../"
import { Link } from "react-router-dom";



const VedioDatail = () => {
  const [videoDatail, setVideosDatail ] = useState(null)
  const [reletedVido, setReletedVideos ] = useState([])
  const {id} = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServic.fetching(`videos?part=snippet,statistics&id=${id}`)
         setVideosDatail(data.data.items[0]);
         const reletedData = await ApiServic.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
         setReletedVideos(reletedData.data.items)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [id])


  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{ flexDirection: {xs: 'column', md: 'row'} }}>
        <Box width={ {xs: '100%', md: '75%'} }>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player"/>

             {videoDatail?.snippet?.tags?.map((item, idx) => (
              <Chip
                label={item}
                key={idx}
                onDelete={() =>  {}}
                deleteIcon={<Tag />} 
                variant="outlined"
                sx={{ mt: '10px', ml: '10px', cursor: 'pointer' }}
              />
            ))}
            <Typography variant="h5" fontWeight='bold' p={2}> 
              {videoDatail?.snippet?.title}
            </Typography>
            <Typography variant='subtitle2' sx={{opacity: '.7'}} p={2}> 
               {videoDatail?.snippet?.title}
            </Typography>
              <Stack direction="row" gap='20px' alignItems="center" py={1} px={2} >
                <Stack sx={{opacity: 0.7 }} direction={'row'} gap='3px' alignItems={'center'}>
                  <Visibility/>
                  {parseInt(videoDatail?.statistics?.viewCount).toLocaleString()} views
                </Stack>

                <Stack sx={{opacity: 0.7 }} direction={'row'} gap='3px' alignItems={'center'}>
                  <FavoriteOutlined/>
                  {parseInt(videoDatail?.statistics?.likeCount).toLocaleString()} like
                </Stack>

                <Stack sx={{opacity: 0.7 }} direction={'row'} gap='3px' alignItems={'center'}>
                  <MarkChatRead/>
                  {parseInt(videoDatail?.statistics?.commentCount).toLocaleString()} comment
                </Stack>
            </Stack> 

            <Stack direction="row" py={1} px={2}>
              <Link to={`/channel/${videoDatail?.snippet?.channelId}`}>
               <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'> 
                <Avatar alt={videoDatail?.snippet?.channelTitle} src={videoDatail?.snippet?.thumbnails?.default?.url}/>
                <Typography variant="subtitle2" color="gray">
                  {videoDatail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px" , color: 'gray' , ml: '5px' }} />
                </Typography>
               </Stack>
              </Link>
            </Stack> 
        </Box>
        <Box width={{xs: '100%' ,md:"25%" }}
         px={2} 
         py={{md:1, xs:5}}
         justifyContent='center'
         alignItems='center'
         overflow={'scroll'}
          maxHeight={'120vh'}>
          <Videos videos={reletedVido}/>
        </Box>

      </Box>
    
    </Box>
  )
}

export default VedioDatail
