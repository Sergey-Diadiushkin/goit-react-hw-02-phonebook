import React, { Component } from 'react';
import Container from './components/Container/Container';
import './App.css'
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import shortid from 'shortid'; 
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
// import Filter from './components/Filter/Filter';


class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
 
}

  addContact = data => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )
      ) {
        alert(`${data.name} is already in contacts`);
        return;
      }
      return { contacts: [...prevState.contacts, { id: shortid(), ...data }] };
    });
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
     contacts: prevState.contacts.filter(contact=>contact.id!==contactId)
   }))
  }

  
  handleInputChange = e => {
    this.setState({ filter: e.currentTarget.value})
    }

  getFilteredContacts = () => 
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  

  render() { 
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts()
    return (
      <Container>
        <Section title='Phonebook'>
          <Form onSubmit={this.addContact}  />
       </Section>
        <Section title='Contacts'>
          <Filter value={filter}  />
          <Contacts contacts={filteredContacts} onDeleteContact={this.deleteContact} />
</Section>
      </Container >
     

    );
  }
}
 
export default App;
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
