import React, { useContext } from "react";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { themeContext } from "../../App";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function SetPagination({ page, setPage, numOfPages }) {
  const handleChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  const { darkMode } = useContext(themeContext);
  console.log(darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        <Pagination
          count={numOfPages}
          page={page}
          color={darkMode ? "secondary" : "primary"}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
}

export default SetPagination;
