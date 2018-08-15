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
      <div className='login'>
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='username'>Username</label>
          <div>
            <input className='input' type='text' id='username' placeholder='Username'/>
          </div>
          <div>
            <input className='input' type='text' id='password' placeholder='password' />
          </div>
            <input className='submit_login' type='submit' />
        </form>
      </div>
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
