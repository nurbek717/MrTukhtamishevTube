import {Routes, Route} from  'react-router-dom'
import { Box} from '@mui/material'
import {Main , Chanel, Navbar, VedioDatail, Search} from '../'

function App() {
  return (
    <Box>
      <Navbar />
        <Routes>
            <Route path='/' element={<Main  />} />
            <Route path='/channel/:id' element={<Chanel />} />
            <Route path='/vedio/:id' element={<VedioDatail />} />
            <Route path='/search/:id' element={<Search />} />
        </Routes>
    </Box>
  )
}

export default App
