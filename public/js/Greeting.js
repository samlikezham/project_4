class Greeting extends React.Component {
	render() {
		return(
			<div className="greetingContainer">
			<h3>Welcome, {this.props.username}!</h3>
			<h4>Current high score: {this.props.currentHighScore}</h4>
			<a href="javascript:;" onClick={()=> {
					this.props.signOut()}}>Sign Out</a>
			<button className="delete_btn" onClick={this.props.deleteUser}>Delete Account</button>
			</div>
		)
	}
}
