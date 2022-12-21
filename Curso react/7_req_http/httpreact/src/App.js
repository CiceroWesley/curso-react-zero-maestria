import './App.css';

import {useState, useEffect} from 'react'
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products"

// 4 custom hook
function App() {



  const [products,setProducts] = useState([])

  //  4 custom hook
  //se fosse por exemplo pegar dados de um usuario poderia reutilizar esse hook., passando so a url desejada.
  const {data: items} = useFetch(url)

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
    const res = await fetch(url,{
      method: 'POST', //por padrão é get
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), //passar o objeto em formato json
    })
    // 3 - carregamento dinâmico
    const addedProduct = await res.json()
    //nao poderia simplesmente colocar o product no lugar do addedProduct não? testei e funcionou
    setProducts((prevProducts)=>[...prevProducts,addedProduct])
    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
      {/*antes era products no lugar de items */}
        {items && items.map((product)=>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
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
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
