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
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='login_username'>Username</label>
          <div>
            <input className='input' type='text' id='login_username' />
          </div>
          <label className='label' for='login_password'>Password</label>
          <div>
            <input className='input' type='text' id='login_password' />
          </div>
            <input className='button is-primary' type='submit' />
        </form>
        <br/>
        <br/>
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='create_username'>Username</label>
          <div>
            <input className='input' type='text' id='create_username' />
          </div>
          <label className='label' for='create_password'>Password</label>
          <div>
            <input className='input' type='text' id='create_password' />
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
