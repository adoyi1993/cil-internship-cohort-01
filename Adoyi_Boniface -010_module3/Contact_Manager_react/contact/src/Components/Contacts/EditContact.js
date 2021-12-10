import React, { Component } from 'react';
import { Consumer } from './../../context';
import InputCollection from './../Layout/InputCollections';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount(){
    const { id } = this.props.match.params;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    const contact = response.data;

    this.setState({ name: contact.name , email: contact.email, phone: contact.phone })
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

    const updateContact = {
      name,
      email,
      phone
    }

    const { id } = this.props.match.params;

    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

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
                Edit Contact
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
                  <input type="submit" value="Save" className="btn btn-light btn-block"/>
                </form>        
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact;