/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../style/PokemonCardComponent.css'

class PokemonCardComponent extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          {/* <img className="card-img-top" 
      src={this.props.url}
       alt="Card image cap" /> */}
          <div className="header">
            <h5 className="card-title" style={{ textAlign: 'center' }}>
              {this.props.name} : {this.props.url}
            </h5>
            <p className="card-text">{this.props.pokemon}</p>
          </div>
        </div>
      </>
    )
  }
}
export default PokemonCardComponent
