import { TextField, Autocomplete } from "@mui/material";

const Search = () => {
  return (
    <>
      <TextField id="outlined-search" label="Search field" type="search" />
      <Autocomplete disablePortal id="combo-box" options={} />
    </>
  );
};

export default Search;
