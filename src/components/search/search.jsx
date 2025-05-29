import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiServic } from "../../service/api.service";
import {colors} from '../../constants/colors'
import {Videos} from '../'

const Search = () => {
  const [vedios, setVedios] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServic.fetching(`search?part=snippet&q=${id}`);
        setVedios(data.data.items); // 👈 typo tuzatildi
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);


  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth="90%">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Search results for{" "}
          <span style={{ color: colors.secondary }}>{id}</span>
        </Typography>

        <Videos videos={vedios} />
      </Container>
    </Box>
  );


};
export default Search;

