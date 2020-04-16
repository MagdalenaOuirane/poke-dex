/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/Pagination.css';


  class Pagination extends React.Component {


    
    render() {
        return (
            
            <div className="container-wrap">
                <div className="row">
                    <ul className="pagination-custom text-center">
                        <li className="pag-link"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                        <li className="pag-link"><a href="#">1</a></li>
                        <li className="pag-link"><a href="#">2</a></li>
                        <li className="pag-link current"><span>3</span></li>
                        <li className="pag-link"><a href="#">4</a></li>
                        <li className="pag-link"><a href="#">5</a></li>
                        <li className="pag-link"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}





export default Pagination