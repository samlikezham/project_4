//  #########     CONSTRUCTOR     ###########
	//  PROPS we expect to receive
	// question
class Question extends React.Component {
	constructor(props){
		super(props)
		this.isAnswered = this.isAnswered.bind(this)
	}


	//  toggle prompt - function passed in from sidebar
	//  update scoreboard - function passed in from sidebar



	//   ###########  FUNCTIONS     ###########
	// get current value and set to !value
	// answer toggle to show

	isAnswered(){

	}



//  ##############   RENDER    ###############
	render(){

		return <div>

			{/* if looking at question - show question */}
			<div className="questionDisplay">
				<h1>{this.props.data.question}</h1>

				<li><strong>Value:</strong> {this.props.data.value} </li>
			</div>

			{/* btn to reveal answer */}
			<div className="answer">
				<button onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>



			<button onClick={this.isAnswered}>Correct</button>
			<button onClick={this.isAnswered}>Incorrect</button>
			<button onClick={this.isAnswered}>No Answer</button>
			{/* toggle score btns after */}
			<div>

			</div>



			{/* scorekeeper */}
			<div className="scoreKeeper">
				{/*  */}
			</div>

		</div>
	}

}


//    reveal buttons to declare right, wrong, or didn't answer
//  after any of three buttons pressed
//    make call to edit score if right or wrong
//    call to toggle prompt
