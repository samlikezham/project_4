class Userlist extends React.Component {
	constructor(props) {
    super(props);
  }
  componentDidMount(){
    fetch('/api/v1/users.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ users: data }) });
  }
  render(){
  	console.log(this)
    let users = this.state.users.map((user) => {
      return(
        <div key={user.id}>
          <p>username: {user.username}</p>
          <p>password: {user.password}</p>
          <p>highest score: {user.high_score}</p>
        </div>
      )
    })
	return(
      <div>
        {users}
      </div>
    )
  }
}