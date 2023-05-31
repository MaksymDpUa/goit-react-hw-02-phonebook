import { nanoid } from "nanoid";
import { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        id: '',
    }


    inputNameId = nanoid();
 
    handleInputChange = (e) => {
       const  {name, value} = e.target
    this.setState({[name]: value})
}
  
    resetForm = () => {
        this.setState({  name: '',
        id: '',})
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        const id = nanoid();
     
        this.props.addContact([{ name: this.state.name, id }])
        this.resetForm()
    };
    



    render() {
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.inputNameId}></label>
            <input
                id={this.inputNameId}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={this.state.value}
/><button type="submit" >Add contact</button></form>
    }
}