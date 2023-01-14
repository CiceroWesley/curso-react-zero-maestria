import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  //cleanup
  //deal with memory leak (evitar vazamento de memoria)
  //cancelar resquícios de funções
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled(){
    if(cancelled){
      return
    }
  }

  // register
  const createUser = async (data) => {
    checkIfIsCancelled()
    

    setLoading(true)
    setError(null)

    try {
      // criando usuário

      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false)

      return user


    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)
      
      // tratamento de erros
      let systemErrorMesage

      if(error.message.includes("Password")){
        systemErrorMesage = "A senha precisa conter pelo menos 6 caracteres."
      } else if(error.message.includes("email-already")){
        systemErrorMesage = "E-mail já cadastrado."
      } else{
        systemErrorMesage = "Ocorreu um erro, por favor tente mais tarde."
      }

      setLoading(false)
      setError(systemErrorMesage)

    }
    
  }

  // logout - sign out
  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
  }

  // login - sign in
  const login = async(data) => {
    // para não vazar
    checkIfIsCancelled()

    setLoading(true)
    setError("")

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)

    } catch (error) {
      let systemErrorMesage

      if(error.message.includes("user-not-found")){
        systemErrorMesage = 'Usuário não encontrado.'
      } else if(error.message.includes('wrong-password')){
        systemErrorMesage = 'Senha incorreta.'
      } else{
        systemErrorMesage = 'Ocorreu um erro, tente novamente mais tarde'
      }

      setError(systemErrorMesage)
      setLoading(false)
        
      
    }

  }


  //seta o cancelado, esse useEffect executa só uma vez
  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }

}