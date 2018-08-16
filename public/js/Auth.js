//  ####### TABLE auth  ######
//id SERIAL, username VARCHAR(20), password VARCHAR(20)

class Auth extends React.Component {

  render() {

    let formFields = {}
    return(
      <div className='login'>
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className='input'
              ref={usernameInput => formFields.username = usernameInput}
              type='text'
              id='username' placeholder="username" />
          </div>
          <div>
            <input åå
              className='input'
              ref={passwordInput => formFields.password = passwordInput}
              type='password'
              id='password' placeholder="password" />
          </div>
            <input className='submit_login'
              onClick={()=>
                this.props.handleSubmit(formFields.username.value, formFields.password.value)}
            type='submit' value="Create Account"/>
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
