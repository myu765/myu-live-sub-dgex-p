import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Main_1 from "./Main_1";
import Main_2 from "./Main_2";
import Main_3 from "./Main_3";

class Main extends Component {
  render() {
    return (
      <Box sx={{ width: 384, height: 972, }}>
        <Box sx={{ height: "218px", maxHeight: "218px", minHeight:"218px", overflow: "auto", }}>
          <Main_1 />
          <Main_2 />
        </Box>
        <Main_3 />
      </Box>
    )
  }
}
export default Main;