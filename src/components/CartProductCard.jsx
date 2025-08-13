import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { useDispatch } from 'react-redux'
import { deleteCartProduct } from '../features/cartProducts/cartSlice'

function CartProductCard({name, image, price}){
  const dispatch = useDispatch()

  return(
    <div className="flex flex-row gap-1 w-full h-15 bg-stone-500 items-center justify-between relative">
      <div className="w-20 h-full bg-orange-200">
        <img src={image} className="object-contain w-full h-full" alt={name} />
      </div>
      <p className="text-xs">{name}</p>
      <p className="text-xs">{price}$</p>
      <button className='text-red-700 hover:text-red-300 cursor-pointer' onClick={() => dispatch(deleteCartProduct(name))}>
        <RemoveShoppingCartIcon fontSize='small'/>
      </button>  
    </div>
  )
}

export default CartProductCard