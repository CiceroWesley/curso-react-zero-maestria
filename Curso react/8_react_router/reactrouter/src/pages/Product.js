import { useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

import { Link } from 'react-router-dom'

const Product = () => {
  // 4 - rota dinâmica
  //pegar o id do produto que está sendo exibido, para se ter acesso aqui
  // como o $_GET do PHP para pegar o parametro da url
  const {id} = useParams()

  // 5 - carregamento do dado individual
  const url = "http://localhost:3000/products/" + id

  const {data: product, loading, error} = useFetch(url)

  console.log(product)

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* 6 - nested routes */}
          {/* usando o route products id info */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}

    </>
  )
}

export default Product