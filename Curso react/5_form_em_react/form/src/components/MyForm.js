import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
  //6 controlled input
  //dados ja preenchidos recebe do banco de dados ou de outro local, passa pela props do componente,recebe aqui e seta nos estados e a variavel coloca no valor do sinputs, para poder ser vista no front,
  //formulario de edição, adição de coisas.



  //3 gerenciamento de dados
  const [name,setName] = useState(user ? user.name : '')
  const [email,setEmail] = useState(user ? user.email : '')

  const [bio,setBio] = useState(user ? user.bio : '')

  const [role,setRole] = useState(user ? user.role : '')

  const handleName = (e)=>{
    setName(e.target.value)
  }


  const handleSubmit = (event)=>{
    //para a página não recarregar, pois estamos em uma spa
    event.preventDefault()
    //validação por exemplo, antes do envio
    console.log('envio dado')
    //tenho acesso aos dados dos input tambem, para fazer as possíveis validações
    console.log(name,email,bio,role)
    //7 limpar formularios
    //depois de enviar o formulario pode-se querer limpar um formulario ou se não quiser não limpar, deixando ja preenchido apenas alterar o necessario.
    setName('')
    setEmail('')
    setBio('')
  }


  // console.log(name)
  // console.log(email)
  return (
    <div>
      {/* 5 envio de form */}
      {/* 1 Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome." onChange={handleName} value={name}/>
        </div>
        {/* 2 label envolvendo o input */}
        <label>
          {/*4 simplificação manipulação state alteração estado inline, mesmo do 3 so que inline */}
          <span>Email:</span>
          <input type="email" name='email' placeholder='Digite o seu email.' onChange={(e)=> {setEmail(e.target.value)}} value={email} />
        </label>
        {/*8 text area */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='descrição do usuário.' onChange={(e)=>{ setBio(e.target.value)}} value={bio}></textarea>
        </label>
        {/*9 select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e)=>{setRole(e.target.value)}} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}

export default MyForm