import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Matheus','Pedro','Josias','Maria'])

  //fazendo com objeto, como se fosse pegando do banco de dados

  const [users,setUsers] = useState([
    {id: 1, name: 'João', age: 24},
    {id: 2, name: 'Wesley', age: 22},
    {id: 3, name: 'Pedro', age: 50}
  ])

  //não precisa passaar os users, porque vai pegar o estado antigo (que agora é o atual)
  const deleteRandom = () =>{
    const numberRandom = Math.floor(Math.random() * 4)

    //previus state, se der igual ele vai excluir se não ele mantem na lista
    //deu diferente ele retorna, se igual ele exclui da lista
    setUsers((prevUsers)=>{
      //se deu igual ele exclui , porque, vai voltar pro estado que nao tenha aquele item
      // volta para o estado anterior, removendo aquele item
      //seta todos os itens excento aquele que deu igual
      //so é verdadeiro se for diferente (porque não acha quem remover??)
      return prevUsers.filter((user)=> numberRandom !== user.id)
    })
  }


  return (
    <div>
      <ul>
        {/*usando map para mostrar os elementos dinamicamente com o jsx, na arrow function tem o () e não o {} porque ele retorna um objeto. É gerado um warning porque os elementos precisam de uma chave unica. Essa chave vem do DB chave primaria do mysql ou do mongdb, mas em ultimo caso usa o index do map, mas pode dar conflito se o projeto for grande, pois utiliza as mesmas keys/index do map.*/}
        {list.map((item,i)=> (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/*do jeito certo */}
      <ul>
        {/*a chave unica vem do banco de dados, por exemplo. */}
          {users.map((user) => (
            <li key={user.id}> {user.name} - {user.age}</li>
          ))}
      </ul>
      <button onClick={deleteRandom}>Delete random</button>
    </div>
  )
}

export default ListRender