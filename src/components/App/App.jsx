import { ContactList } from 'components/ContactList/ContactList';
import { Component } from 'react';
import { Form } from '../Form/Form';

export class App extends Component {
  state = {
    contacts: [],   
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, ...newContact],
    }));
  };

  render() {
    return (
      <div>
        <Form addContact={this.addContact}></Form>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
