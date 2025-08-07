import { useDispatch, useSelector } from "react-redux"
import { fetchMockData } from "../features/allProducts/allProductsSlice"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

function RenderProducts(){
  const [containerClass, setContainerClass] = useState("flex flex-row flex-wrap gap-1 justify-center items-center h-200 w-full bg-gray-900 text-gray-50 rounded-2xl p-3 overflow-y-auto")
  const dispatch = useDispatch()
  const status = useSelector(state => state.allProducts.status)
  const mockData = useSelector(state => state.allProducts.allProducts)

  useEffect(() => {
    if (status === "idle"){
      dispatch(fetchMockData())
      console.log('Datos solicitados')
    }
  }, [status, dispatch])

  if(mockData.length === 0){
    return (
      <div className={containerClass}>
        <ProductCard 
          productName={"Loading..."}
          productImg={"https://signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"}
          productPrice={"..."}
          productCategory={"Loading..."}
          productDesc={"Loading..."}
          productRating={{ rate: 0, count: 0 }}
        />
      </div>
    )
  }

  return(
    <div className={containerClass}>
      {
        mockData.map((product) => {
          return (
            <ProductCard 
              key={product.id}
              productName={product.title}
              productImg={product.image}
              productPrice={product.price}
              productCategory={product.category}
              productDesc={product.description}
              productRating={product.rating}
            />
          )
        })
      }
    </div>
  )
}

export default RenderProducts