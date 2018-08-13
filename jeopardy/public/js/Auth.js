//  ####### TABLE auth  ######
//id SERIAL, username VARCHAR(20), password VARCHAR(20)

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render() {
    return(
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='username'>Username</label>
          <div>
            <input className='input' type='text' id='username' />
          </div>
          <label className='label' for='password'>Password</label>
          <div>
            <input className='input' type='text' id='password' />
          </div>
            <input className='button is-primary' type='submit' />
        </form>
      </div>
    )
  }
}
//PROPS
//  username


//    ########  RENDER    #########
// form to input username
//  click to submit
//  onSubmit calls setter function for username in app.js
