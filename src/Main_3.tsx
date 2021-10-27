import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import StarIcon from '@mui/icons-material/Star';
import AnnouncementSharpIcon from '@mui/icons-material/AnnouncementSharp';
import Paper from '@mui/material/Paper';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Main_3_1 from "./Main_3_1";
import Main_3_2 from "./Main_3_2";

function Main_3() {
  const [valueTab, setValueTab] = React.useState('1');
  const [valueBtm, setValueBtm] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      sx={{height: "698px", maxHeight: "698px", minHeight:"698px", overflow: "auto"}}
    >
      <Paper
        sx={{
          display: "block",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "384px"
        }}
        elevation={0}
      >
        <BottomNavigation
          showLabels
          value={valueBtm}
          onChange={(event, newValue) => {
            setValueBtm(newValue);
            newValue === 0 && setValueTab("1")
            newValue === 1 && setValueTab("2")
            newValue === 2 && setValueTab("3")
            newValue === 3 && setValueTab("4")
          }}
        >
          <BottomNavigationAction label="宝の地図" icon={<RestoreIcon />} />
          <BottomNavigationAction label="攻略メモ" icon={<AnnouncementSharpIcon />} />
          <BottomNavigationAction label="None" icon={<DriveFileRenameOutlineSharpIcon />} />
          <BottomNavigationAction label="装備" icon={<StarIcon />} />
        </BottomNavigation>
      </Paper>
      <TabContext value={valueTab}>
        <TabPanel value="1"><Main_3_1 /></TabPanel>
        <TabPanel value="2"><Main_3_2 /></TabPanel>
        <TabPanel value="3"><Main_3_2 /></TabPanel>
        <TabPanel value="4"><Main_3_2 /></TabPanel>
      </TabContext>
    </Box>
  );
}
export default Main_3;