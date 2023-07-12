import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {count: 0}

  onButtonClick = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {
        count: prevState.count <= 0 ? prevState.count + 1 : 0,
      }
    })
  }

  render() {
    const {count} = this.state
    const textHead = count === 0 ? 'Please Login' : 'Welcome User'
    return (
      <div className="container">
        <div className="mini-container">
          <h1 className="heading">{textHead}</h1>
          {count <= 0 ? (
            <button
              type="button"
              onClick={this.onButtonClick}
              className="button"
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              onClick={this.onButtonClick}
              className="button"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Home
