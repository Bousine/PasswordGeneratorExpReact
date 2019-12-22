import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state = {passwords: []}

  //Fetch passwords after first mount
  componentDidMount(){
    this.getPasswords()
  }

  getPasswords = () => {
    //Get and store passwords in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({passwords}))
  }

  render(){
    const {passwords} = this.state

    return(
      <div className="App">
        {/* Render the passwords if available */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {passwords.map((password,index)=>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get more
            </button>
          </div>
        ):(
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default App
