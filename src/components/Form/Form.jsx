import { nanoid } from 'nanoid';
import { Component } from 'react';

export class Form extends Component {
  state = {
      name: '',
      number: '',
    };

  inputNameId = nanoid();
    inputTelId = nanoid();


  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', id: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();

      this.props.addContact([{ name: this.state.name, id, number: this.state.number }]);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputNameId}>Name</label>
        <input
          id={this.inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
          value={this.state.value}
            />
            <label htmlFor={this.inputTelId}></label><input
                id={this.inputTelId}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleInputChange}
/>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
