import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './../../context';

    const Disp = {
      borderRadius: "5px",
      backgroundColor: "#d9dbd9",
      alignContents: "center",
      height: "250px"
     
    }
   



class Contacts extends Component {
  render() {
    return(
      <>
      <div className="mb-2" style ={Disp}>
          <h3 style ={{textAlign: "center"}} > Contact Manager</h3>
          <p> &nbsp; &nbsp;&nbsp; This is a portfolio project to showcase knowledge of:</p>
          <ol style = {{listStyleType: "lower-roman"}}>
          <li> React Components and JSX.</li>
          <li> React Router. </li>
          <li> Component state management.</li>
          <li> Context api for global state management. </li>
          <li> Making asynchronous calls to the Json placeholder fake rest api using "async/await".</li>

          </ol>

      

        </div>
      
        <br/>   <br/>  

      <Consumer>
        
        {value => {
          const contacts = value.contacts;
          return(
            <React.Fragment>
             
              {contacts.map(contact => (
                <Contact  key={contact.id}
                          contact={contact}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
      </>
    )
  }
}
export default  Contacts;