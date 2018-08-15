// ############   RENDER     ###############
	// prompt to pick another question
class Prompt extends React.Component {
	render() {
		return(
			<div className="container">
				{(this.props.inheritedState.currentUser) ? <h2>Select the next question</h2> : <h2>Log in or create an account</h2>}
			</div>
		)
	}
}
