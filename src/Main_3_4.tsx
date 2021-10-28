import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Main_E_0 from "./Main_E_0";
import Main_E_2 from "./Main_E_2";
import Main_E_13 from "./Main_E_13";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px:1, py:1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Main_3_2 () {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  return (
    <Box>
      <Box sx={{ bgcolor: 'success.main', color: 'primary.contrastText', py:0,px:1, fontSize:"13px"}}>
        装備メモ
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ m:0, p:0, borderRight: 1, borderColor: 'divider' }}
        >
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="剣" {...a11yProps(0)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="重武器" {...a11yProps(1)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="刀" {...a11yProps(2)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="長柄" {...a11yProps(3)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="特殊" {...a11yProps(4)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="杖" {...a11yProps(5)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="弓" {...a11yProps(6)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="盾" {...a11yProps(7)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="重装" {...a11yProps(8)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="軽装" {...a11yProps(9)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="兜" {...a11yProps(10)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="帽子" {...a11yProps(11)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="インナ" {...a11yProps(12)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="アクセ" {...a11yProps(13)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="神器" {...a11yProps(14)} />
          <Tab sx={{my:0,py:0,minHeight:"42px",minWidth:"80px"}} label="家具" {...a11yProps(15)} />
        </Tabs>
        <TabPanel value={value} index={0}><Main_E_0 /></TabPanel>
        <TabPanel value={value} index={1}>Item</TabPanel>
        <TabPanel value={value} index={2}><Main_E_2 /></TabPanel>
        <TabPanel value={value} index={3}>Item</TabPanel>
        <TabPanel value={value} index={4}>Item</TabPanel>
        <TabPanel value={value} index={5}>Item</TabPanel>
        <TabPanel value={value} index={6}>Item</TabPanel>
        <TabPanel value={value} index={7}>Item</TabPanel>
        <TabPanel value={value} index={8}>Item</TabPanel>
        <TabPanel value={value} index={9}>Item</TabPanel>
        <TabPanel value={value} index={10}>Item</TabPanel>
        <TabPanel value={value} index={11}>Item</TabPanel>
        <TabPanel value={value} index={12}>Item</TabPanel>
        <TabPanel value={value} index={13}><Main_E_13 /></TabPanel>
        <TabPanel value={value} index={14}>Item</TabPanel>
        <TabPanel value={value} index={15}>Item</TabPanel>
      </Box>
    </Box>
  );
}
export default Main_3_2;