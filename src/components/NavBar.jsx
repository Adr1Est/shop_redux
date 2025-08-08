import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey, red } from '@mui/material/colors';

function NavBar(){
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  return(
    <div className="flex w-full justify-end items-center bg-gray-900 p-2">
      <div className="self-end me-2 relative">
        <IconButton sx={{color: grey[300]}}>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={2} sx={{color: red[300]}} overlap="circular" />
        </IconButton>
      </div>
    </div>
  )
}

export default NavBar