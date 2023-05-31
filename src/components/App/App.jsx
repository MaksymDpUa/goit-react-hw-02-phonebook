import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import { Form } from '../Form/Form';

export class App extends Component {
  state = {
    contacts: [],  
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, ...newContact],
    }));
  };
  onChangeFilter = (e) => {
  this.setState({filter: e.target.value})
  }
  

  render() {
    return (
      <div>
        <Form addContact={this.addContact}></Form>
        <ContactList contacts={this.state.contacts} />
        <Filter name="filter" value = {this.state.filter} onChange={this.onChangeFilter}/>
      </div>
    );
  }
}
