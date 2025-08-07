function ProductCard({productName, productImg, productPrice, productCategory, productDesc, productRating}){

  return(
    <div className="flex flex-col gap-3 bg-gray-600 rounded-2xl w-80 h-90 p-3" title={productDesc}>
      <div className="w-full h-50 rounded-2xl">
        <img src={productImg} alt={productName} className="object-contain rounded-2xl w-full h-full hover:scale-110 transition-transform duration-500"/>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm">{productName}</p>
        <p className="text-xs">{productCategory}</p>
        <div className="flex flex-row justify-between">
          <p>{productPrice} $</p>
          <div className="flex flex-row gap-1">
            <p>⭐{productRating.rate}</p>
            <p>💹{productRating.count}</p>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-1">
          <button className="text-xl cursor-pointer hover:scale-130 transition-transform duration-100">❤️</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard