//  #########     CONSTRUCTOR     ###########
	//  PROPS we expect to receive
	// question
class Question extends React.Component {
	constructor(props){
		super(props)
	}

	//   ###########  FUNCTIONS     ###########


//  ##############   RENDER    ###############
	render(){

		return <div>

			{/* if looking at question - show question */}
			<div className="questionDisplay">
				<h1>{this.props.data.question}</h1>
				<li><strong>Category:</strong> {this.props.data.category.title}</li>
				<li><strong>Value:</strong> {this.props.data.value} </li>
			</div>

			{/* btn to reveal answer */}
			<div className="answer">
				<button onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>


			{/*  reveal buttons to declare right, wrong, or didn't answer */}
			{/*  after any of three buttons pressed */}
			{/*  make call to edit score if right or wrong */}
			<div className="scoreBtns">
			{/* toggle score btns after clicked*/}		
					<button onClick={()=> {this.props.addToScore()}}>Correct!</button>
					<button onClick={()=> {this.props.subtractScore()}}>Incorrect</button>
			</div>



			{/* scorekeeper */}
			<div className="scoreKeeper">
				{/*  */}
			</div>

		</div>
	}

}

	//  toggle prompt - function passed in from sidebar
	//  update scoreboard - function passed in from sidebar
	
	// after point added
	//   call to toggle prompt









