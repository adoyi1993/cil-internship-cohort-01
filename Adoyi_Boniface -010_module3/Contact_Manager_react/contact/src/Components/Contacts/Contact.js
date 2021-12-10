import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from './../../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch(e) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card card-body mb-3"  style={{fontFamily: 'Times New Roman", Times, serif'}}  >
              <h5>{name} <i onClick={() => {this.setState({ showContactInfo: !this.state.showContactInfo })}} 
                            className="fas fa-chevron-down"
                            style={{cursor: 'pointer'}}>
                          </i>
                          <i  className="fas fa-times" 
                              style={{color: 'red', float: 'right', cursor: 'pointer'}}
                              onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                          </i>
                          <Link to={`contact/edit/${id}`}>
                            <i  className="fas fa-edit"
                                style={{color: 'black', float: 'right', cursor: 'pointer', marginRight: '1rem'}}>
                            </i>
                          </Link>
              </h5>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">E-mail: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;