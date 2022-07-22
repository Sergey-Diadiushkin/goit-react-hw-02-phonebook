import React, { Component } from 'react';
import Container from './components/Container/Container';
import './App.css'
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import shortid from 'shortid'; 
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';


class App extends Component {
  state = {
    contacts: [],
    name: '',
    number:''
  }

  addContact = data => {
    console.log(data);

    const contact = {
      ...data,
      // id: shortid.generate(),
    }
    this.setState(prevState => ({
      contacts:[...prevState.contacts, contact ]
    }))
  }



  render() { 
   
    return (
      <Container>
        <Section title='Phonebook'>
           <Form onSubmit={this.addContact} />
       </Section>
        <Section title='Contacts'>
          <Filter/>
          <Contacts contacts = {this.state.contacts}/>
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
