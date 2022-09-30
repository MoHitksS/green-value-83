import * as React from 'react';
import {Button, Divider} from '@mui/material';
import {Menu} from '@mui/material';
import {MenuItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddCart({data}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AddIcon sx={{fontSize: "15px", color:"gray"}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem
        sx={{fontSize:"10px", minWidth:"220px"}}
        onClick={handleClose}>XS (UK XS)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", minWidth:"220px"}}
         onClick={handleClose}>S (UK S)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", minWidth:"220px"}}
         onClick={handleClose}>M (UK M)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", minWidth:"220px"}}
         onClick={handleClose}>L (UK L)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", minWidth:"220px"}}
         onClick={handleClose}>XL (UK XL)</MenuItem>
        <Divider/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <MenuItem
        sx={{fontSize:"10px"}}
         onClick={handleClose}>FIND YOUR SIZE</MenuItem><div> </div>
         <MenuItem
        sx={{fontSize:"10px"}}
         onClick={handleClose}>SIZE GUIDE</MenuItem>
        </div>
      </Menu>
    </div>
  );
}