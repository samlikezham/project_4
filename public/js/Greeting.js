class Greeting extends React.Component {
	render() {
		return( 
			<div className="greetingContainer">
			<h3>Welcome, {this.props.username}!</h3>
			<a href="#action" onClick={()=> {
					this.props.signOut()}}>Sign Out</a>
			</div>
		)
	}
}