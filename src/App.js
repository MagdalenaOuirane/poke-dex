import React from 'react'
import Navbar from './components/NavBar'
import Mainboard from './components/Mainboard'
import Pagination from './components/Pagination'
import './style/App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Pagination />

        <div className="container">
          <Mainboard />
        </div>
      </>
    )
  }
}
export default App
