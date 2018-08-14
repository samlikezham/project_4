
class Prompt extends React.Component {
	constructor(props){
		super(props)
	}


// ############   RENDER     ###############
	// prompt to pick another question
	render() {
		console.log(this.props.showPrompt)
		return(
			<div className="container">
				{
					(this.props.showPrompt) 
					? 
					<button onClick={()=> {this.props.queryQuestion(); this.props.togglePromptOff()}}>
					Get Next Question
					</button> : null
				}
			</div>
		)
	}

}
