
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: 'orangered'

  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" style={{ width: '30px', height: '30px', backgroundColor: 'transparent', color: 'black'}} >
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
