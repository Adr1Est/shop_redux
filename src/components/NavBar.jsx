import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { grey, red } from '@mui/material/colors';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProductCard from './CartProductCard';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { clearCartProducts } from '../features/cartProducts/cartSlice';
import { clearAllProducts, fetchMockData } from '../features/allProducts/allProductsSlice';

function NavBar(){
  const [cartListState, setCartListState] = useState(false)
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartProducts)
  const cartPrice = cartList.reduce((acc, product) => acc + product.price, 0)

  const toggleListState = () => {
    if(cartListState){ return setCartListState(false) }
    return setCartListState(true)
  }

  const buttons = [
    <Button key="one" onClick={() => dispatch(clearAllProducts())}>Clear product list</Button>,
    <Button key="two" onClick={() => dispatch(clearCartProducts())}>Clear Cart</Button>,
    <Button key="three" onClick={() => dispatch(fetchMockData())}>Fetch data</Button>,
  ];

  return(
    <div className="flex w-full justify-between items-center bg-stone-600 p-2">
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
      <div className="me-2 relative">
        <IconButton sx={{color: grey[300]}} onClick={toggleListState}>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={cartList.length} sx={{color: red[300]}} overlap="circular" />
        </IconButton>
        {cartListState
          ? (
            <div className='flex flex-col bg-gray-700 absolute min-w-80 max-h-100 right-0 z-10 p-2'>
              <div className='flex flex-col gap-1 overflow-y-auto'>
                {cartList.length > 0
                  ? 
                    cartList.map((product, index) => (
                      <CartProductCard
                        key={index}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        rating={product.rating}
                      />
                    ))
                  : <p>Vacío</p>}
              </div>
              <div className='flex flex-row w-full items-center bg-gray-600 p-2'>
                <div className='w-1/2'>
                  <p>Total: {cartPrice.toFixed(2)}$</p>
                </div>
                <div className='w-1/2 flex justify-end items-center'>
                  <button className='cursor-pointer hover:bg-gray-900 p-2 rounded-full'>
                    Cart
                  </button>
                </div>
              </div>
            </div>
            )
          : ""}
      </div>
    </div>
  )
}

export default NavBar