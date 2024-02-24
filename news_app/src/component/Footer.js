import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <i className="" style={{ 'fontSize': '26px' }}>N.E.W.S</i>
            </a>

          </div>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2024 All Copyright right reserved</span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

            <li className="ms-3"><a className="text-muted"  rel="noreferrer" target='_blank' href="https://github.com/Kartikgupta666/NEWS-APP.git"><i className='fa fa-github' style={{ 'fontSize': '26px' }}></i></a></li>
            <li className="ms-3"><a className="text-muted"  rel="noreferrer" target='_blank' href="https://www.instagram.com/its_kartik_6666"> <i className='fa fa-instagram' style={{ 'fontSize': '26px' }}></i> </a></li>
            <li className="ms-3"><a className="text-muted"  rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/kartik-gangil"><i className="fa fa-linkedin" style={{ 'fontSize': '26px' }}></i></a></li>
            <li className="ms-3"><a className="text-muted"  rel="noreferrer" target='_blank' href="https://www.youtube.com/channel/UCIKzs6MlFXQvgQbAAaH0GyA"><i className="fa fa-youtube-play" style={{ 'fontSize': '26px' }}></i></a></li>

          </ul>
        </footer >
      </div >
    )
  }
}

export default Footer
