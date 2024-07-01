import { ChangeEvent, Component, FormEvent } from "react";
import { PhoneNumber } from "./PhoneNumber";

class TakeNumber extends Component<{
  addContact: (contact: PhoneNumber) => void;
}> {
  state = {
    name: "",
    surname: "",
    phone: "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      surname: this.state.surname,
      number: this.state.phone,
    });
    this.setState({ name: "", surname: "", phone: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
          required
        />
        <input
          type="text"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
          placeholder="Enter surname"
          required
        />
        <input
          type="tel"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TakeNumber;
