import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Main_2() {
  const [toggle, setToggle] = React.useState(true);
  const [nanido, setNanido] = React.useState("あったかい");
  const [memoTgl1, setMemoTgl1] = React.useState(true);
  const [memoTxt1, setMemoTxt1] = React.useState("＜未設定＞");
  const [memoTgl2, setMemoTgl2] = React.useState(true);
  const [memoTxt2, setMemoTxt2] = React.useState("＜未設定＞");
  const [memoTgl3, setMemoTgl3] = React.useState(true);
  const [memoTxt3, setMemoTxt3] = React.useState("＜未設定＞");

  return (
      <Grid container spacing={1}>
        <Grid item xs={2} sm={2}>
          <Box sx={{ paddingTop: "12px", paddingLeft: "12px", color: 'secondary.main', fontSize: "1.0em" }}>難易度</Box>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Box sx={{ paddingTop: "12px", paddingLeft: "12px", color: 'secondary.main', fontSize: "1.0em" }}>
            { toggle
              ? <p style={{ padding: 0, margin: 0 }} 
                  onDoubleClick={() => {setToggle(false)}}>{nanido === "" ? "　　　　　" : nanido}</p>
              : <input
                  type="text"
                  value={nanido} 
                  onChange={(event) => { setNanido(event.target.value) }}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === 'Escape') { setToggle(true) }}}
                  onBlur={(event) => { setToggle(true) }}
                  autoFocus={true}
                  style={{ padding: 0, margin: 0, width: "99%", fontSize: "0.8em" }}
                />
            }
          </Box>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>メモ１</Box>
        </Grid>
        <Grid item xs={10} sm={10}>
          <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>
          { memoTgl1
              ? <p style={{ padding: 0, margin: 0 }} 
                  onDoubleClick={() => {setMemoTgl1(false)}}>{memoTxt1 === "" ? "　　　　　" : memoTxt1}</p>
              : <input
                  type="text"
                  value={memoTxt1} 
                  onChange={(event) => { setMemoTxt1(event.target.value) }}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === 'Escape') { setMemoTgl1(true) }}}
                  onBlur={(event) => { setMemoTgl1(true) }}
                  autoFocus={true}
                  style={{ padding: 0, margin: 0, width: "99%", fontSize: "0.8em" }}
                />
            }
          </Box>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>メモ２</Box>
        </Grid>
        <Grid item xs={10} sm={10}>
        <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>
          { memoTgl2
              ? <p style={{ padding: 0, margin: 0 }} 
              onDoubleClick={() => {setMemoTgl2(false)}}>{memoTxt2 === "" ? "　　　　　" : memoTxt2}</p>
              : <input
                  type="text"
                  value={memoTxt2} 
                  onChange={(event) => { setMemoTxt2(event.target.value) }}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === 'Escape') { setMemoTgl2(true) }}}
                  onBlur={(event) => { setMemoTgl2(true) }}
                  autoFocus={true}
                  style={{ padding: 0, margin: 0, width: "99%", fontSize: "0.8em" }}
                />
            }
          </Box>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>メモ３</Box>
        </Grid>
        <Grid item xs={10} sm={10}>
        <Box sx={{ paddingTop: "0px", paddingLeft: "12px", color: 'success.main', fontSize: "1.0em" }}>
          { memoTgl3
              ? <p style={{ padding: 0, margin: 0 }} 
              onDoubleClick={() => {setMemoTgl3(false)}}>{memoTxt3 === "" ? "　　　　　" : memoTxt3}</p>
              : <input
                  type="text"
                  value={memoTxt3} 
                  onChange={(event) => { setMemoTxt3(event.target.value) }}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === 'Escape') { setMemoTgl3(true) }}}
                  onBlur={(event) => { setMemoTgl3(true) }}
                  autoFocus={true}
                  style={{ padding: 0, margin: 0, width: "99%", fontSize: "0.8em" }}
                />
            }
          </Box>
        </Grid>
      </Grid>
  )
}
export default Main_2;