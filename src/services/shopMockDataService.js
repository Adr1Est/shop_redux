const getShopMockData = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  if (!response.ok) {
    return console.error('Error al solicitar datos.')
  }
  const data = await response.json();
  return data;
}

export { getShopMockData }