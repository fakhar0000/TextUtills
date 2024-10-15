import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'white' ? 'aliceblue' : 'black' }}>
      <Link className={`navbar-brand text-${props.mode === 'white' ? 'black':'white'}`} to="/">
        {props.title}
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className={`nav-link text-${props.mode === 'white' ? 'black':'white'}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'white' ? 'black':'white'}`} to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>

        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{backgroundColor: props.mode === 'black' ? 'black':'white', color: props.mode === 'white' ? 'black':'white'}}
          />
          <button className={`btn btn-outline-primary my-2 my-sm-0 text-${props.mode === 'white' ? 'black':'white'}`} type="submit">
            Search
          </button>
        </form> */}

        <div className={`form-check form-switch text-${props.mode === 'white' ? 'black':'white'} m-1`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'white' ? 'Enable Dark Mode':'Enable Light Mode'}</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",  
  aboutText: "About",
};