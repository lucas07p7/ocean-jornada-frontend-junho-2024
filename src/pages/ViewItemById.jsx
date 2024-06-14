import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import { useParams } from 'react-router-dom'


function ViewItemById() {
  const [item, setItem] = useState()

  const { itemId} = useParams()

  async function carregarDados(){
  const apiUrl = 'https://rickandmortyapi.com/api/character/' + itemId

  const response = await fetch(apiUrl)

  const body = await response.json()

  setItem(body)
  }

  useEffect(function () {
    carregarDados()
  }, [])

  if (!item) {
    return <div> Carregando...</div>
  }



  return (
    <>
      <h1>{item.name}</h1>
    </>
  )
}

export default ViewItemById
