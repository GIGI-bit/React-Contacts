import React, { Component } from "react";
import { PhoneNumber } from "./components/PhoneNumber";
import TakeNumber from "./components/TakeNumber";

interface AppState {
  contacts: PhoneNumber[];
}

class App extends Component<[], AppState> {
  constructor(props: []) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps: [], prevState: AppState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contact: PhoneNumber) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (index: number) => {
    this.setState((prevState) => {
      const contacts = [...prevState.contacts];
      contacts.splice(index, 1);
      return { contacts };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contact Form</h1>
        <TakeNumber addContact={this.addContact} />
        <h2>Stored Contacts</h2>
        <ul>
          {this.state.contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} {contact.surname} - {contact.number}
              <button onClick={() => this.deleteContact(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
