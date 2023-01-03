import { useState, useEffect } from "react";






//  4 - costum hook
//hook é basicamente uma função

export const useFetch = (url) =>{
  const [data,setData] = useState(null)

  // 5 - refatorando post
  //cabeçalhos
  const [config, setConfig] = useState(null)
  //metodos utilizados na função get ou post
  const [method, setMethod] = useState(null)
  //dado inserido no sistema, chama o callFetch
  const [callFetch, setCallFetch] = useState(false)

  //6 loading
  //não está carregando nada
  const [loading, setLoading] = useState(false)

  // 7 - tratando erros
  const [error, setError] = useState(null)

  // 8 - desafio 6
  const [itemId, setItemId] = useState(null)

  //função para organizar a configuração do POST
  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method,
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(data),
      })
      setMethod(method)
    }
    // Tarefa 6
    else if(method === "DELETE"){
      setConfig({
        method,
        headers: {
          'Content-type' : 'application/json'
        },
      })
      setMethod(method)
      setItemId(data)
    }
  }

  //useEffect usado para get, pegar os dados do arquivo, caso a url mude ou o callFetch
  useEffect(()=>{
    const fetchData = async ()=>{

      //6 loading
      //está carregando os dados
      setLoading(true)
      // 7 - tratando erros
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)  
      } catch (error) {
        console.log(error.message)
        setError("Houve algum erro ao carregador os dados!") 
      }
      //dados já carregados
      setLoading(false)
    }

    fetchData()
  },[url, callFetch])

  // 5 - refatorando post
  //useEffect ativado quando o config, method ou url é alterado
  useEffect(()=>{
    const httpRequest = async () =>{
      let json
      if(method === "POST"){
        //faz o POST com as configurações geradas pela função anteriormente, a httpConfig
        //ela altera o config e o method
        let fetchOptions = [url, config]
        //porque o spred operator?
        //insere no db.json
        const res = await fetch(...fetchOptions)
        //recebe como resposta
        json = await res.json()
        //seta o callFetch, ativando assim o useEffect do fetchData que faz um post, setando os Datas e retornando em return data httpconfig para ser exibido.
        // setCallFetch(json)
      }
      else if(method === "DELETE"){
        //tarefa 6
        const deleteUrl = `${url}/${itemId}`
        // console.log(deleteUrl)
        const res = await fetch(deleteUrl, config)

        json = await res.json()

      }
      setCallFetch(json)
    }
    httpRequest()
  }, [config, method, url])

  //dados que vai utilizar no hook
  return {data, httpConfig, loading, error}
}