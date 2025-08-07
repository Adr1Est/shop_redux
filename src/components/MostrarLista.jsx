import { useDispatch, useSelector } from "react-redux"
import { fetchMockData } from "../features/allProducts/allProductsSlice"
import { useEffect } from "react"

function MostrarLista(){
  const dispatch = useDispatch()
  const status = useSelector(state => state.allProducts.state)
  const mockData = useSelector(state => state.allProducts.allProducts)

  useEffect(() => {
    if (status === "idle"){
      dispatch(fetchMockData())
      console.log('Datos solicitados')
    }
  }, [status, dispatch])

  useEffect(() => {
    console.log(mockData)
  }, [mockData])
  return(
    <div>
      <ul>
        {mockData.length > 0
          ? mockData.map(product => <li>{product.title}</li>)
          : <li>Sin datos</li>
        }
      </ul>
    </div>
  )
}

export default MostrarLista