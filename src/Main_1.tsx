import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import InputSharpIcon from '@mui/icons-material/InputSharp';

function Main_1() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              デモンゲイズ　エクストラ
            </Typography>
            <IconButton size="small" color="inherit" onClick={ () => {;} }>
              <InputSharpIcon />
            </IconButton>
            <IconButton size="small" color="inherit" onClick={ () => {;} }>
              <SaveAltIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Alert severity="info" icon={false} sx={{ px:"16px", py:"0px" }}>
        ・ダンジョンRPG<br />
        ・Nintendo Switch™ / PlayStation®4<br />
        ・©2021 KADOKAWA GAMES / EXPERIENCE
      </Alert>
    </Box>
  )
}
export default Main_1;