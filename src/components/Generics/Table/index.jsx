import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import SubTitle from '../SubTitle';
import GenericSelect from '../Select';
function EnhancedTableHead(props) {
  const { onSelectAllClick,  numSelected, rowCount,headCells} =
    props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{fontSize:'44px'}}
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell sx={{color:'#929FAF'}} key={headCell.id}>
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function GenericTable(props) {  
  const [selected, setSelected] = React.useState([]);
  const {headCells,rows,open}=props
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };
  // const isSelected = (id)=>selected.indexOf(id)!==-1
  const data1 = [
    {title:'Hello',value:'Hello'}
  ]
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ border: 0 ,mb:0,height:open?'64px':0 , overflow:'hidden',transition:'all .3s linear',p:`${open?'10px':'0px'} 24px`}}>
        <Table>
          <TableBody>
            <TableRow  sx={{display:'flex',justifyContent:'space-between'}}>
              <GenericSelect data={data1}/>
              <GenericSelect data={data1}/>
              <GenericSelect data={data1}/>
              <GenericSelect data={data1}/>
              <GenericSelect data={data1}/>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              headCells={headCells}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    
                    {headCells.map((val)=><TableCell key={val.id} >{val.render?val.render(row): row[val.id]}</TableCell>
                    )}
                  </TableRow>
                );
              })}
              {rows?.length <1 && (
                <TableRow
                >
                  <TableCell align='center' colSpan={6} >No Data</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}