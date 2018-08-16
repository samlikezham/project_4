//  ####### TABLE auth  ######
//id SERIAL, username VARCHAR(20), password VARCHAR(20)

class Auth extends React.Component {

  render() {

    let formFields = {}
    return(
      <div className='field'>
        <h2>Log In</h2>
        <form >
        <h3>Create Account</h3>
          <label className='label' for='username'>Username</label>
          <div>
            <input
              className='input'
              ref={usernameInput => formFields.username = usernameInput}
              type='text'
              id='username' />
          </div>
          <label className='label' for='login_password'>Password</label>
          <div>
            <input åå
              className='input'
              ref={passwordInput => formFields.password = passwordInput}
              type='password'
              id='password' />
          </div>
            <button className='button is-primary'
              onClick={()=>
                this.props.handleSubmit(formFields.username.value, formFields.password.value)}
             value="Create Account"/>
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
