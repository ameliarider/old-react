import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';
import { Footer } from './Footer'

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Header />
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <Footer />
      </div>
    )
  }
}

export default App;