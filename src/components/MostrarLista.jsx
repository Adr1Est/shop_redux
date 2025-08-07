import { useDispatch, useSelector } from "react-redux"
import { fetchMockData } from "../features/allProducts/allProductsSlice"
import { useEffect, useState } from "react"

function MostrarLista(){
  const [containerClass, setContainerClass] = useState("h-150 w-full md:w-1/2 lg:w-1/4 bg-purple-900 text-gray-50 border-2 border-purple-400 rounded-2xl p-3 overflow-y-auto")
  const dispatch = useDispatch()
  const status = useSelector(state => state.allProducts.status)
  const mockData = useSelector(state => state.allProducts.allProducts)

  useEffect(() => {
    if (status === "idle"){
      dispatch(fetchMockData())
      console.log('Datos solicitados')
    }
    console.log(status)
  }, [status, dispatch])

  useEffect(() => {
    console.log(mockData)
  }, [mockData])

  if(mockData.length === 0){
    return (
      <div className={containerClass}>
        <li>Sin datos</li>
      </div>
    )
  }

  return(
    <div className={containerClass}>
      <ul className="list-disc">
        {
          mockData.map((product, index) => <li className="mb-2 bg-purple-950 rounded-2xl p-2" key={index}>{product.title}</li>)
        }
      </ul>
    </div>
  )
}

export default MostrarLista