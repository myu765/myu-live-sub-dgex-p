import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: 'text.primary',
        p: 0, borderRadius: 0,
        textAlign: 'center',
        fontSize: '0.88rem',
        fontWeight: 'bold',
        ...sx,
      }}
      {...other}
    />
  );
}

function Main_E_xthbrand () {
  return (
    <Box>
      <Box sx={{display:'grid',gridTemplateColumns: 'repeat(7, 1fr)',gap:0
        ,mt:"20px", mb:"2px", pt:"3px", pb:"2px", px:"4px", border: '1px solid #000',}}>
        <Item sx={{ gridRow: '1', gridColumn: 'span 2', textAlign:"left", fontWeight: 'bold' }}>Rank A ★</Item>
        <Item sx={{ gridRow: '1', gridColumn: 'span 5', textAlign:"left", fontWeight: 'bold' }}>聖剣デモンスレイン</Item>
      </Box>
      <Box sx={{display:'grid',gridTemplateColumns: 'repeat(8, 1fr)',gap:0,}}>
        <Item sx={{ gridRow: '1', gridColumn: '1' }}>持手</Item>
        <Item sx={{ gridRow: '1', gridColumn: '2' }}>射程</Item>
        <Item sx={{ gridRow: '1', gridColumn: '3' }}>攻撃</Item>
        <Item sx={{ gridRow: '1', gridColumn: '4' }}>回数</Item>
        <Item sx={{ gridRow: '1', gridColumn: '5' }}>命中</Item>
        <Item sx={{ gridRow: '1', gridColumn: '6' }}>回避</Item>
        <Item sx={{ gridRow: '1', gridColumn: '7' }}>防御</Item>
        <Item sx={{ gridRow: '1', gridColumn: '8' }}>軽減</Item>
      </Box>
      <Box sx={{display:'grid',gridTemplateColumns: 'repeat(8, 1fr)',gap:0,}}>
        <Item sx={{ gridRow: '1', gridColumn: '1' }}>片手</Item>
        <Item sx={{ gridRow: '1', gridColumn: '2' }}>S</Item>
        <Item sx={{ gridRow: '1', gridColumn: '3' }}>328</Item>
        <Item sx={{ gridRow: '1', gridColumn: '4' }}>1</Item>
        <Item sx={{ gridRow: '1', gridColumn: '5' }}>0</Item>
        <Item sx={{ gridRow: '1', gridColumn: '6' }}>0</Item>
        <Item sx={{ gridRow: '1', gridColumn: '7' }}>2</Item>
        <Item sx={{ gridRow: '1', gridColumn: '8' }}>-</Item>
      </Box>
      <Divider textAlign="left" sx={{width:"270px",my:"2px"}}/>
      <Box sx={{display:'grid',gridTemplateColumns: 'repeat(6, 1fr)',gap:0,}}>
        <Item sx={{ gridRow: '1', gridColumn: '1' , fontSize: "12px"}}>{/* 呪攻＋ */}呪攻＋</Item>
        <Item sx={{ gridRow: '1', gridColumn: '2' , fontSize: "12px"}}>{/* 特攻＋ */}</Item>
        <Item sx={{ gridRow: '1', gridColumn: '3' , fontSize: "12px"}}>{/* 呪防＋ */}呪防＋</Item>
        <Item sx={{ gridRow: '1', gridColumn: '4' , fontSize: "12px"}}>{/* 特防＋ */}特防＋</Item>
        <Item sx={{ gridRow: '1', gridColumn: '5' , fontSize: "12px"}}>{/* HP＋ */}HP＋</Item>
        <Item sx={{ gridRow: '1', gridColumn: '6' , fontSize: "12px", color:"error.main"}}>{/* HP－ */}</Item>
        <Item sx={{ gridRow: '2', gridColumn: '1' , fontSize: "12px"}}>{/* STR */}STR+3</Item> 
        <Item sx={{ gridRow: '2', gridColumn: '2' , fontSize: "12px"}}>{/* INT */}</Item>
        <Item sx={{ gridRow: '2', gridColumn: '3' , fontSize: "12px"}}>{/* MYS */}</Item>
        <Item sx={{ gridRow: '2', gridColumn: '4' , fontSize: "12px"}}>{/* VIT */}</Item>
        <Item sx={{ gridRow: '2', gridColumn: '5' , fontSize: "12px"}}>{/* AGI */}</Item>
        <Item sx={{ gridRow: '2', gridColumn: '6' , fontSize: "12px"}}>{/* LUC */}LUC+3</Item>
        <Item sx={{ gridRow: '3', gridColumn: '1' , fontSize: "12px"}}>{/* 対獣人 */}</Item>
        <Item sx={{ gridRow: '3', gridColumn: '2' , fontSize: "12px"}}>{/* 対生物 */}</Item>
        <Item sx={{ gridRow: '3', gridColumn: '3' , fontSize: "12px"}}>{/* 対不死 */}対不死</Item>
        <Item sx={{ gridRow: '3', gridColumn: '4' , fontSize: "12px"}}>{/* 対精霊 */}対精霊</Item>
        <Item sx={{ gridRow: '3', gridColumn: '5' , fontSize: "12px"}}>{/* 対魔族 */}対魔族</Item>
        <Item sx={{ gridRow: '3', gridColumn: '6' , fontSize: "12px"}}>{/* 対神 */}</Item>
      </Box>
      <Divider textAlign="left" sx={{width:"270px",my:"2px"}}/>
      <Box sx={{display:'grid',gridTemplateColumns: 'repeat(8, 1fr)',gap:0,}}>
        <Item sx={{ gridRow: '1', gridColumn: 'span 8', textAlign:"left", fontSize: "13px", fontWeight:"500" }}>
        装備可能：ゲイザー専用
        </Item>
        <Item sx={{ gridRow: '2', gridColumn: 'span 8', textAlign:"left", fontSize: "13px", fontWeight:"500" }}>
        入手方法：ラスボス戦闘前イベント
        </Item>
        <Item sx={{ gridRow: '3', gridColumn: 'span 8', textAlign:"left", fontSize: "13px", fontWeight:"500" }}>
        （魔剣デモンスレインが進化）
        </Item>
      </Box>
    </Box>
  );
}
export default Main_E_xthbrand;