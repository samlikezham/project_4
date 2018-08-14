//  #########     CONSTRUCTOR     ###########
	//  PROPS we expect to receive
	// question
class Question extends React.Component {
	constructor(props){
		super(props);
		this.togglePromptOn = this.togglePromptOn.bind(this)
		this.togglePromptOff = this.togglePromptOff.bind(this)
		this.state = {
			showPrompt: false
		}
	}


//   ###########  FUNCTIONS    ###########
	togglePromptOn(){
		this.setState({
			showPrompt: true
		})
	}
	togglePromptOff(){
		this.setState({
			showPrompt: false
		})
	}
// side bar has score
// side bar looks at current state to show prompt?


//  ##############   RENDER    ###############
	render(){

		return <div class="questionContainer">
			{/* display question */}
			<div className="questionDisplay">
				<h1>{this.props.data.question}</h1>
				<li><strong>Category:</strong> {this.props.data.category.title}</li>
				<li><strong>Value:</strong> {this.props.data.value} </li>
			</div>

			{/* btn to reveal answer for question */}
			<div className="answer">
				<button onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>


			{/*  reveal buttons to declare right, wrong, or didn't answer */}
			{/*  after any of three buttons pressed */}
			{/*  make call to edit score if right or wrong */}
			<div className="scoreBtns">
				{/*  after point is added/subtracted call to toggle prompt */}
					<button onClick={()=> 
					{this.props.addToScore(); this.togglePromptOn()}}>
					Correct!</button>
					<button onClick={()=> 
					{this.props.subtractScore(); this.togglePromptOn()}}>
					Incorrect</button>
					<button onClick={this.togglePromptOn}>Did Not Answer</button>
			</div>	

			{/* scorekeeper //  toggle prompt - function passed in from sidebar */}
			<div className="questionPrompt">
				{(this.state.showPrompt == true) ? 
				<button onClick={()=>
				{this.props.queryQuestion(); this.togglePromptOff()}}>
				Get Next Question</button> : ''}
			</div>

			{/* scorekeeper  //  update scoreboard - function passed in from sidebar */}
			<div className="scoreKeeper">
				{/*  */}
			</div>
		</div>
	}

}