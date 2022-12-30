import './App.css';

import {useState, useEffect} from 'react'
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products"

// 4 custom hook
function App() {



  const [products,setProducts] = useState([])

  //  4 custom hook
  //se fosse por exemplo pegar dados de um usuario poderia reutilizar esse hook., passando so a url desejada.
  //recebe a data e o httpConfig
  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name,setName] = useState("")
  const [price,setPrice] = useState("")

  // 1 - resgatando dados
  // useEffect(()=>{
  //   async function fetchData(){
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()
  // },[])

  // 2 = add de products
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const product = {
      name, //como tem o mesmo nome dos estados nao precisa igular name: name
      price,
    }
    // const res = await fetch(url,{
    //   method: 'POST', //por padrão é get
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product), //passar o objeto em formato json
    // })
    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json()
    // //nao poderia simplesmente colocar o product no lugar do addedProduct não? testei e funcionou
    // setProducts((prevProducts)=>[...prevProducts,addedProduct])
    // 5 refatorando post
    //chama o useFetch dentro dele há a função de usar o POST, com a função httpConfig
    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  //8 - desafio 6
  const handleRemove = (id) =>{
    httpConfig(id, 'DELETE')

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {/* se carregando mostra carregando dados se não mostra os dados */}
      {loading && <p>Carregando dados</p>}
      {/* 8 - tratando erros */}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {/*antes era products no lugar de items */}
          {items && items.map((product)=>(
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - state de loading no post */}
          {/* Não mostra o botão de submeter enquanto está carregando ou desabilita o botão */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
