//  ####### TABLE auth  ######
//id SERIAL, username VARCHAR(20), password VARCHAR(20)

class Auth extends React.Component {

  render() {

    let formFields = {}
    return(
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
        <h3>Create Account</h3>
          <label className='label' for='username'>Username</label>
          <div>
            <input 
              className='input'
              ref={usernameInput => formFields.username = usernameInput}
              type='text'
              id='username' />
          </div>
          <label className='label' for='password'>Password</label>
          <div>
            <input åå
              className='input'
              ref={passwordInput => formFields.password = passwordInput}
              type='password'
              id='password' />
          </div>
            <input className='button is-primary' 
              onClick={()=> 
                this.props.handleSubmit(formFields.username.value, formFields.password.value)}
            type='submit' value="Create Account"/>
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
