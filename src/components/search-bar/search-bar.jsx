import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState(" ");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`)
      setValue('')
      
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
