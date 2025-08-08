import './App.css'
import RenderProducts from './components/RenderProducts.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <>
      <div className='flex flex-col bg-gray-950 min-h-dvh gap-5'>
        <NavBar/>
        <RenderProducts/>
      </div>
    </>
  )
}

export default App
