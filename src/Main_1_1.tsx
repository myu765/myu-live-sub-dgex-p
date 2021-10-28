import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const MyTextField = React.forwardRef((
  props: TextFieldProps & {
    spellcheck: "false" | "true"
  }
) => {
  return <TextField {...props} />
});

function Main_1_1() {
  const [urlTwitter, setUrlTwitter] = React.useState("https://twitter.com/Akino765");
  const [urlGitHub, setUrlGitHub] = React.useState("https://github.com/myu765/myu-live-sub-dgex-p");
  const [urlGitHub2, setUrlGitHub2] = React.useState("https://github.com/myu765/myu-live-sub-view");
  return (
    <Box>
        <Typography sx={{ ml: 2, mt: 2, fontWeight: 'bold' }} variant="subtitle1" component="div">
          できること！
        </Typography>
        <Typography sx={{ ml: 2, mt: 1 }}  variant="body2">
          （１）簡易メモ
        </Typography>
        <Typography sx={{ ml: 4, mt: 0}}  variant="body2">
          ・難易度 と ＜未設定＞ の箇所は<br />　ダブルクリックで編集できます
          </Typography>
          <Typography sx={{ ml: 2, mt: 1 }}  variant="body2">
          （２）宝の地図
        </Typography>
        <Typography sx={{ ml: 4, mt: 0 }}  variant="body2">
          ・宝の地図の内どれを回収しているか<br />　チェックできます<br />
          ・デモンは「Ctrl」＋「クリック」で<br />　複数選択できます<br />
          ・チェックの有無はファイルに保存できます。<br />　チェックの有無を読み込む機能はありません。
        </Typography>
        <Typography sx={{ ml: 2, mt: 1 }}  variant="body2">
          （３）攻略メモ
        </Typography>
        <Typography sx={{ ml: 4, mt: 0 }}  variant="body2">
          ・作る予定（２週目遊びながら...）
        </Typography>
        <Typography sx={{ ml: 2, mt: 1 }}  variant="body2">
          （４）ノート
        </Typography>
        <Typography sx={{ ml: 4, mt: 0 }}  variant="body2">
          ・作る予定（２週目遊びながら...）
        </Typography>
        <Typography sx={{ ml: 2, mt: 1 }}  variant="body2">
          （５）装備メモ
        </Typography>
        <Typography sx={{ ml: 4, mt: 0 }}  variant="body2">
          ・作る予定（２週目遊びながら...）
        </Typography>
        <Divider textAlign="right">以上</Divider>
        <Typography sx={{ ml: 2, mt: 2, fontWeight: 'bold' }} variant="subtitle1" component="div">
          推奨ブラウザ
        </Typography>
        <Typography sx={{ ml: 4, mt: 0}}  variant="body2">
          ・ウィンドウサイズを以下に固定できるもの<br />　横：384px<br />　縦：972px
        </Typography>
        <Typography sx={{ ml: 2, mt: 2, fontWeight: 'bold' }} variant="subtitle1" component="div">
          専用ブラウザ
        </Typography>
        <Typography sx={{ mx: 4, mt: 1 }}  variant="body2">
          <MyTextField
            sx={{ width: "100%" }}
            spellcheck="false"
            id="input-github"
            label="GitHub "
            defaultValue={urlGitHub2}
            value={urlGitHub2}
            size="small"
            multiline
            rows={2}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon color="success"/>
                </InputAdornment>
              ),
            }}
            variant="standard"
            color="success"
          />
        </Typography>
        <Typography sx={{ ml: 2, mt: 2, fontWeight: 'bold' }} variant="subtitle1" component="div">
          連絡先
        </Typography>
        <Typography sx={{ mx: 4, mt: 1 }}  variant="body2">
          <MyTextField
            sx={{ width: "100%" }}
            spellcheck="false"
            id="input-twitter"
            label=" Twitter@Akino765　秋乃P／ship01むよう "
            defaultValue={urlTwitter}
            value={urlTwitter}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon color="primary"/>
                </InputAdornment>
              ),
            }}
            variant="standard"
            color="primary"
          />
        </Typography>
        <Typography sx={{ ml: 2, mt: 2, fontWeight: 'bold' }} variant="subtitle1" component="div">
          開発用 (ソースコード)
        </Typography>
        <Typography sx={{ mx: 4, mt: 1 }}  variant="body2">
          <MyTextField
            sx={{ width: "100%" }}
            spellcheck="false"
            id="input-github"
            label="GitHub "
            defaultValue={urlGitHub}
            value={urlGitHub}
            size="small"
            multiline
            rows={2}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon color="secondary"/>
                </InputAdornment>
              ),
            }}
            variant="standard"
            color="secondary"
          />
        </Typography>
    </Box>
  )
}
export default Main_1_1;