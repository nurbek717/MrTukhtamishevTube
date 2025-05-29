import { Stack,Box } from '@mui/material'
import { Link } from 'react-router-dom'
// import { logo } from '../../constants'
import {SearchBar} from '../'
import { colors } from '../../constants/colors'
function Navbar() {
  return (
    <Stack direction={'row'} alignItems={"center"} justifyContent={"space-between"} p={2} sx={{ position: 'sticky', top:0, zIndex:999 , background: colors.primary}}>
      <Link  to={'/'}>
        <img src="./images/MrTukhtamishev-5.svg" alt="logo"  height={45} width={150} />
      </Link>
      <SearchBar/>
    <Box/>
    </Stack>
  )
}

export default Navbar
