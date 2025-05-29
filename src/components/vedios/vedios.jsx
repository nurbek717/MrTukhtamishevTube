import { Stack, Box } from "@mui/material";
import {VideosCard , ChanellCard , Loader} from '../'
const Vedios = ({ videos }) => {

  if (!videos || videos.length === 0) return <Loader />;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item.id.videoId}> 
        {item.id.videoId && <VideosCard video={item}/>} 
        {item.id.channelId && <ChanellCard video={item}/>} 
        </Box>
      ))}
    </Stack>
  );
};

export default Vedios;
