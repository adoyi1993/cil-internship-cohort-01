import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from './../../context';
import InputCollection from './../Layout/InputCollections';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value});

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // check for errors
    if(name === ''){
      this.setState({
        errors: { name: 'Name is required'}
      });
      return;
    }

    if(email === ''){
      this.setState({
        errors: { email: 'Email is required'}
      });
      return;
    }

    if(phone === ''){
      this.setState({
        errors: { phone: 'Phone is required'}
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    
    dispatch({ type: 'ADD_CONTACT', payload: response.data });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // redirect
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
              </div>
              <div className="card-body">
                <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputCollection label="Name"
                                  name="name"
                                  placeholder="Enter name..."
                                  value={name}
                                  onChange={this.onChange}
                                  error={errors.name}
                  />
                  <InputCollection label="Email"
                                  name="email"
                                  placeholder="Enter email..."
                                  value={email}
                                  onChange={this.onChange}
                                  type="email"
                                  error={errors.email}
                  />
                  <InputCollection label="Phone"
                                  name="phone"
                                  placeholder="Enter phone..."
                                  value={phone}
                                  onChange={this.onChange}
                                  error={errors.phone}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block"  style={Style}  />
                </form>        
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;

const Style = {
  backgroundColor: "#2b2b2b",
  color: "#fff"


}