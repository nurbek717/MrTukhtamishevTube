import { Stack } from "@mui/material";
import { categories } from '../../constants';
import {colors} from '../../constants/colors'

function Category( {selectedCategoryHandle, selectedCategory}) {
  return (
    <Stack direction="row" sx={{ overflowX: 'scroll' }}>
      {categories.map(item => {
        const Icon = item.icon; 
        const Name = item.name;
        return (
          <button key={item.name} className="category-btn" style={{ borderRadius: "0" , background: item.name === selectedCategory  && colors.secondary, color: item.name === selectedCategory && '#fff' }} onClick={() => selectedCategoryHandle(item.name)}>
            <span style={{ color: item.name === selectedCategory ? '#fff' :  colors.secondary, marginRight:'15px' }}> <Icon /></span> 
            <span style={{ opacity:'1' }}> {Name}  </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
