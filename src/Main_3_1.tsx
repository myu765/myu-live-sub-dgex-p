import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import BootstrapTable, {SelectRowProps} from 'react-bootstrap-table-next';
import filterFactory, {selectFilter, multiSelectFilter} from 'react-bootstrap-table2-filter';
import selectOptionsDm from './selectOptionsDemon';
import selectOptionsDg from './selectOptionsDungeon';
import treasureMap from './treasureMap';

const columns = [
  { dataField: 'id', text:'ID', hidden: true, },
  { dataField: 'item', text: '地図', headerStyle: {width:'48px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, headerAlign:"center",align:"center",},
  { dataField: 'dg', text: 'ダンジョン', sort: true, headerStyle: {width:'92px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, filter: selectFilter({options: selectOptionsDg}), headerAlign:"center",align:"center",},
  { dataField: 'er', text: 'エリア', sort: true, headerStyle: {width:'100px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, headerAlign:"center",align:"center",},
  { dataField: 'x', text: 'X', headerStyle: {width:'18px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px',}, headerAlign:"center",align:"right",},
  { dataField: 'y', text: 'Y', headerStyle: {width:'18px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px',}, headerAlign:"center",align:"right",},
  { dataField: 'dm', text: 'デモン', headerStyle: {width:'88px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, filter: multiSelectFilter({options: selectOptionsDm}), headerAlign:"center",align:"center",},
];

const localStorageTMapRaw = localStorage.getItem('treasureMap')
if(!localStorageTMapRaw){
  localStorage.setItem('treasureMap', "[]")
}
let localStorageTMap: number[] = []

function Main_3_1 () {
  // チェックボックスの状態を管理する処理
  const [selectedTMap, setSelectedTMap] = React.useState<number[]>([])
  const addTMap = (r: number) => {
    const localStorageTMap:number[] = JSON.parse(localStorageTMapRaw)
    setSelectedTMap([...localStorageTMap, r])
    const localStorageItem = [...localStorageTMap, r]
    localStorage.setItem('treasureMap', JSON.stringify(localStorageItem))
  }
  const delTMap = (r: number) => {
    const localStorageTMap:number[] = JSON.parse(localStorageTMapRaw)
    setSelectedTMap([...localStorageTMap.filter(item => item !== r)])
    const localStorageItem = localStorageTMap.filter(item => item !== r)
    localStorage.setItem('treasureMap', JSON.stringify(localStorageItem))
  }
  function handleOnSelect (row: any, isSelected: boolean, rowIndex: number, e: React.SyntheticEvent<Element, Event>) {
    isSelected ? addTMap(row.id) : delTMap(row.id)
    return true;
  }
  const selectRow: SelectRowProps<any> = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectAll: true,
    selected: selectedTMap,
    onSelect: handleOnSelect,
    style: { backgroundColor: '#999' }
  }
  // ファイルに保存する処理
  const ClickOutput = () => {
    const localStorageTMap:number[] = JSON.parse(localStorageTMapRaw)
    const blob = new Blob([JSON.stringify(localStorageTMap.sort( (a,b) => a - b ))], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.download = 'dgex-t-map.txt'
    a.href = url
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }
  // 画面の状態が変わる毎に実行される
  const localStorageTMapRaw = localStorage.getItem('treasureMap')
  selectRow.selected = JSON.parse(localStorageTMapRaw)
  return (
    <Box>
      <Box sx={{display: 'flex',flexDirection: 'row-reverse',}}>
        <Button onClick={ClickOutput} color="secondary" variant="outlined" 
          startIcon={<FileDownloadSharpIcon fontSize="inherit" color="secondary"/>}
          size="small" sx={{ fontSize: "11px", py: 0}}
        >チェックの有無をファイルに保存する</Button>
        </Box>
      <BootstrapTable
        keyField='id' 
        data={ treasureMap } 
        columns={ columns }
        selectRow={ selectRow }
        filter={ filterFactory() }
        filterPosition="top"
        condensed
        bootstrap4
        hover
      />
    </Box>
  );
}
export default Main_3_1;