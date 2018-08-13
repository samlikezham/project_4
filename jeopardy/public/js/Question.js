//  #########     CONSTRUCTOR     ###########
class Question extends React.Component {
	constructor(props){
		super(props)
		this.toggleAnswer = this.toggleAnswer.bind(this)
		this.state = {
			currentQuestion: '',
			showAnswer: false,
			score: 0
		}
		console.log(props)
	}

	//  PROPS we expect to receive
		// question
	componentDidMount(){
		if(this.props.data){
			this.setState({
				currentQuestion: this.props.data.question
			})
		}
	}

	//  toggle prompt - function passed in from sidebar
	//  update scoreboard - function passed in from sidebar



	//   ###########  FUNCTIONS     ###########
	// get current value and set to !value
	// answer toggle to show
	toggleAnswer(event){
		let showAnswer = this.state.showAnswer
		this.setState({
			showAnswer: !showAnswer
		})
	}

//  ##############   RENDER    ###############
	render(){
		console.log(this.state)
		return <div>

			{/* if looking at question - show question */}
			<div className="questionDisplay">
				{(this.state.currentQuestion !== null) ?
				<h1>{this.state.currentQuestion}</h1> : ''}
			</div>

			{/* btn to reveal answer */}
			<div className="answerBtn">
				{(this.state.showAnswer) ?
				<li>{this.props.data.answer}</li> : ''}
				<button onClick={this.toggleAnswer}>QUESTION - reveal answer</button>
			</div>

			{/* scorekeeper */}
			<div className="scoreKeeper">
				{(this.state.showAnswer) ?
				<button onClick={this.addToScore}>Correct!</button> : ''}
			</div>

		</div>
	}

}


//    reveal buttons to declare right, wrong, or didn't answer
//  after any of three buttons pressed
//    make call to edit score if right or wrong
//    call to toggle prompt









