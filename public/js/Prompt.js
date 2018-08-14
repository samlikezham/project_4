
class Prompt extends React.Component {
	constructor(props){
		super(props)
	}


// ############   RENDER     ###############
	// prompt to pick another question 
	render() {
		return(
			<div className="container">
				<button onClick={()=> this.props.queryQuestion()}>
				Get Next Question</button>
			</div>
		)
	}

}