/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/PokemonCardComponent.css'

class PokemonCardComponent extends React.Component {
  
  render() {
    
    return (
      <>
        <div className="card">
          {/* <img className="card-img-top" 
      src={this.props.pokemonDetails && this.props.pokemonDetails.url}
       alt="Card image cap" /> */}
          <div className="header">
          <h5 className="card-title" style={{textAlign:'left'}}>{this.props.pokemonDetails && this.props.pokemonDetails.id}</h5>
            <h5 className="card-title" style={{ textAlign: 'center' }}>
              {this.props.pokemonDetails && this.props.pokemonDetails.name}
            </h5>
      
            {/* {this.props.pokemonDetails.effect_entries.map(effect_entry => <h5 className="card-text"> Effect : {effect_entry.effect}</h5>)} */}
          </div>
        </div>
      </>
    )
  }
}
export default PokemonCardComponent
