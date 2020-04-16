import React from 'react'
import ListOfPokemons from './ListOfPokemons'

class Mainboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <ListOfPokemons />
        </div>
      </div>
    )
  }
}

export default Mainboard
