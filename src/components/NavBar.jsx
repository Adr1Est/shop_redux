import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey, red } from '@mui/material/colors';
import { useState } from 'react';

function NavBar(){
  const [favListState, setFavListState] = useState(false)
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const toggleListState = () => {
    if(favListState){ return setFavListState(false) }
    return setFavListState(true)
  }

  return(
    <div className="flex w-full justify-end items-center bg-gray-900 p-2">
      <div className="self-end me-2 relative">
        <IconButton sx={{color: grey[300]}} onClick={toggleListState}>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={2} sx={{color: red[300]}} overlap="circular" />
        </IconButton>
        {favListState
          ? (
            <div className='bg-gray-700 text-gray-50 absolute min-w-50 max-h-100 right-0 z-10 p-2 overflow-y-auto'>
              <ul>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
              </ul>
            </div>
            )
          : ""}
      </div>
    </div>
  )
}

export default NavBar