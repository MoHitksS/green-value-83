import * as React from 'react';
import {Button, Divider} from '@mui/material';
import {Menu} from '@mui/material';
import {MenuItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddCart() {
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
          vertical: 'top',
          horizontal: 'top',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'centre',
        }}
        sx={{
         fontSize:"10px",
         width:"355px"}}
      >
        <MenuItem
        sx={{fontSize:"10px", width:"355px"}}
        onClick={handleClose}>XS (UK XS)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", width:"355px"}}
         onClick={handleClose}>S (UK S)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", width:"355px"}}
         onClick={handleClose}>M (UK M)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", width:"355px"}}
         onClick={handleClose}>L (UK L)</MenuItem>
        <MenuItem
        sx={{fontSize:"10px", width:"355px"}}
         onClick={handleClose}>XL (UK XL)</MenuItem>
        <Divider/>
        <div style={{display:"flex", justifyContent:"space-between", padding:"2px 15px"}}>
          <div> FIND YOUR SIZE</div>
          <div>SIZE GUIDE</div>
        </div>
      </Menu>
    </div>
  );
}
