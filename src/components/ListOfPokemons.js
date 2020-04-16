import React from 'react'


import PokemonCardComponent from './PokemonCardComponent'

class ListOfPokemons extends React.Component {
  
  state = {
     
    pokemonList: [],
    pokemonData : [],
    pageNumber: 0,
    pageItems: 20
  }

  // componentDidMount() {
  //   let url= 'https://pokeapi.co/api/v2/pokemon/'
  //   axios.get(url)
  //   .then(response => {
  //     let pokemonList = response.data.results
  //     console.log('PokemonList:', pokemonList)
  //     this.setState({
  //       pokemonList: pokemonList,
  //     })
  //   })
  // }

  componentDidMount() {
    this.fetchPokemonData();
  }


  fetchPokemonData() {
    let urlPage = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=' + this.state.pageNumber + '&limit' + this.state.pageItems;
    fetch(urlPage)
      .then(response => response.json())
       .then(data => {
         if(data) {
          this.setState({
                  pokemonList : data.results },
                  
                  () => {
                  
                    this.state.pokemonList.map(pokemon => {
                      fetch(pokemon.url)
                      .then( response => response.json())
                      .then (data => {
                        if (data) {
                          let urlInfo = this.state.pokemonData
                          urlInfo.push(data)
                          this.setState ({
                            pokemonData: urlInfo
                          })
                        }
                      })
                      .catch(console.log)
                    })
                  })
                }
              })
              .catch(console.log)
  }


  



  render() {

   



    return (
      <div className="row">
        {/* {this.state.pokemonList.map(pokemon => ( 
         <PokemonCardComponent
         key={pokemon.name}
         name={pokemon.name}
         url={pokemon.url}
         
         />
         ))}  */}
         {this.state.pokemonList.map((pokemon,index) => (
           <PokemonCardComponent
           key={pokemon.name}
           name={pokemon.name}
           pokemon={this.state.PokemonData[index]}
           />
         ))
         }
       
      </div>
     )
  }
}

export default ListOfPokemons
