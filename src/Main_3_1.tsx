import React from 'react';
import BootstrapTable, {SelectRowProps} from 'react-bootstrap-table-next';
import filterFactory, {selectFilter, multiSelectFilter} from 'react-bootstrap-table2-filter';
import selectOptionsDm from './selectOptionsDemon';
import selectOptionsDg from './selectOptionsDungeon';
import treasureMap from './treasureMap';

const selectRow: SelectRowProps<any> = {
  mode: 'checkbox',
  clickToSelect: true,
  style: { backgroundColor: '#ccc' }
}
const columns = [
  { dataField: 'id', text: '地図', headerStyle: {width:'48px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, headerAlign:"center",align:"center",},
  { dataField: 'dg', text: 'ダンジョン', headerStyle: {width:'92px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, filter: selectFilter({options: selectOptionsDg}), headerAlign:"center",align:"center",},
  { dataField: 'er', text: 'エリア', headerStyle: {width:'100px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, headerAlign:"center",align:"center",},
  { dataField: 'x', text: 'X', headerStyle: {width:'18px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px',}, headerAlign:"center",align:"right",},
  { dataField: 'y', text: 'Y', headerStyle: {width:'18px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px',}, headerAlign:"center",align:"right",},
  { dataField: 'dm', text: 'デモン', headerStyle: {width:'88px',fontSize: '11px',verticalAlign:"top",}, style: {fontSize: '11px'}, filter: multiSelectFilter({options: selectOptionsDm}), headerAlign:"center",align:"center",},
];

function Main_3_1 () {
  return (
    <BootstrapTable
      keyField='id' 
      data={ treasureMap } 
      columns={ columns }
      selectRow={ selectRow }
      filter={ filterFactory() }
      filterPosition="top"
      condensed
      bootstrap4
    />
  );
}
export default Main_3_1;