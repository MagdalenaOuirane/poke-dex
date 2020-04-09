import React from 'react'
import PokemonCardComponent from './components/PokemonCardComponent'
import Navbar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Hello World</h1>
        <PokemonCardComponent />f
      </>
    )
  }
}
export default App
