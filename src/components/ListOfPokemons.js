import React from 'react'

import PokemonCardComponent from './PokemonCardComponent'

class ListOfPokemons extends React.Component {
  state = {
    pokemonList: [],
    pokemonData: [],
    pageNumber: 0,
    pageItems: 20,
  }

  goToNextPage() {
    return this.state.pageNumber + this.state.pageItems
  }

  handleClick = event => {
    const newPage = this.goToNextPage()
    this.setState(
      {
        newPage: this.state.pageNumber,
      },
      () => {
        console.log('pageNumber' + this.state.pageNumber)
        this.fetchPokemonData()

      },
    )
  }

  componentDidMount() {
    this.fetchPokemonData()
  }

  fetchPokemonData() {
    let urlPage =
      'https://pokeapi.co/api/v2/ability/?limit=20&offset=' +
      this.state.pageNumber +
      '&limit' +
      this.state.pageItems
    fetch(urlPage)
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState(
            {
              pokemonList: data.results,
              pokemonData: [],
            },

            () => {
              this.state.pokemonList.map(pokemon => {
                fetch(pokemon.url)
                  .then(response => response.json())
                  .then(data => {
                    if (data) {
                      this.setState({
                        pokemonData: [...this.state.pokemonData, data],
                      })
                    }
                  })
                  .catch(console.log)
              })
            },
          )
        }
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="row">
        {this.state.pokemonList.map((pokemon, index) => (
          <PokemonCardComponent
            key={pokemon.name}
            name={pokemon.name}
            pokemonDetails={this.state.pokemonData[index]}
          />
        ))}
      </div>
    )
  }
}

export default ListOfPokemons
