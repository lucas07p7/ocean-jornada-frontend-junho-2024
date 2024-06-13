import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


function App() {
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }

  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }

  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }

  // //Lista (arrays)
  // const itens = [item1, item2, item3]

  const [itens, setItens] = useState([])

  async function carregarDados(){

  const apiUrl = 'https://rickandmortyapi.com/api/character'

  const response = await fetch(apiUrl)

  const body = await response.json()

  const results = body.results
  console.log('results', results)

  setItens(results)
  }

  useEffect(function () {
    carregarDados()
  }, [])



  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
  )
}

export default App
