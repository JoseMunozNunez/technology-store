import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow p-3 mb-5 bg-body rounded">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
        TECHNOLOGY-STORE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Celulares
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#">
                Portatil
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#">
                Escritorio
              </a>
            </li>            
          </ul>
         <div className="buttons">
          <a href="" className="btn btn-outline-dark">
          <i className="fa-solid fa-cart-shopping me-2"> 2</i>
          </a>
         </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
