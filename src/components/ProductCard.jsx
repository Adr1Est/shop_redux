import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

function ProductCard({productName, productImg, productPrice, productCategory, productDesc, productRating}){

  return(
    <div className="flex flex-col gap-3 bg-gray-600 rounded-xl w-80 h-90  relative" title={productDesc}>
      <div className="bg-gray-400 w-full h-50 rounded-t-xl">
        <img src={productImg} alt={productName} className="object-contain rounded-2xl w-full h-full hover:scale-110 transition-transform duration-500"/>
      </div>
      <div className="flex flex-col gap-1">
        <p>{productName}</p>
        <p className="text-xs">{productCategory}</p>
        <div className="flex flex-row justify-between absolute bottom-3 right-3">
          <div className="flex flex-row gap-3">
            <div className='flex flex-row items-center'>
              <AttachMoneyIcon fontSize='small'/>
              <p>{productPrice}</p>
            </div>
            <div className='flex flex-row items-center'>
              <StarIcon fontSize='small'/>
              <p>{productRating.rate}</p>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <ThumbsUpDownIcon fontSize='small'/>
              <p>{productRating.count}</p>
            </div>
          </div>
          <button className="flex items-center text-xl cursor-pointer hover:scale-130 transition-transform duration-100 ms-4">
            <FavoriteBorderIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard