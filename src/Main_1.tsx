import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Main_1_1 from "./Main_1_1";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Main_1() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              デモンゲイズ　エクストラ
            </Typography>
            <IconButton size="small" color="inherit" onClick={ handleClickOpen }>
              <HelpOutlineIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Alert severity="info" icon={false} sx={{ px:"16px", py:"0px" }}>
        ・ダンジョンRPG<br />
        ・Nintendo Switch™ / PlayStation®4<br />
        ・©2021 KADOKAWA GAMES / EXPERIENCE
      </Alert>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            このツールについて
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              閉じる
            </Button>
          </Toolbar>
        </AppBar>
        <Main_1_1 />
      </Dialog>
    </Box>
  )
}
export default Main_1;