function NavBar(){

  return(
    <div className="flex w-full justify-end items-center bg-gray-900 rounded-2xl p-2">
      <div className="self-end me-2 relative">
        <button className="bg-gray-600 text-gray-50 hover:bg-gray-700 hover:scale-110 rounded-2xl p-3 transition-transform duration-150 cursor-pointer">
          Cart
        </button>
        <div className="flex justify-center items-center rounded-full w-6 h-6 bg-red-500 absolute -top-2 -right-2">
          <p className="text-red-950">0</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar