import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { headName } = props;
  return (
      <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-2">
      <div className="container">
        <Link to="#/" className="navbar-brand">{headName}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i class="fas fa-home"></i> Home </Link> 
            </li>
            <li className="nav-item">
              <Link to="/Contact/add" className="nav-link"><i class="fas fa-user-plus"></i>Add </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i class="fas fa-question-circle"></i>About </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  

  

<div classname="footer" style= {Deco}>
  <p>© 2021 Adoyi Boniface</p>
</div>
</div>



  )
}
const Deco = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#303030",
    color: "white",
    textAlign: "center",
    zIndex: "2"
}

Header.defaultProps = {
  headName: ' Contact-app',
}

Header.propTypes = {
  headName: PropTypes.string.isRequired,
}

export default Header;
