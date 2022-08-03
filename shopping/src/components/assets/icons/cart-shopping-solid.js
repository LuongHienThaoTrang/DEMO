
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 14,
    top: 4,
    border: `1px solid ${theme.palette.background.paper}`,
    backgroundColor: 'orangered',
    borderRadius: '46%',
    minWidth: '24px',
    height: '18px'
  }
}));

export default function CustomizedBadges({ total }) {
  return (
    <IconButton aria-label="cart" style={{ width: '30px', height: '30px', backgroundColor: 'transparent', color: 'black' }} >
      <StyledBadge badgeContent={total} color="secondary" >
        <ShoppingCartIcon style={{ width: '50px' }} />
      </StyledBadge>
    </IconButton>
  );
}
