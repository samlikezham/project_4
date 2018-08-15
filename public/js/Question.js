//  #########     CONSTRUCTOR     ###########
	//  PROPS we expect to receive
	// question
class Question extends React.Component {
//   ###########  FUNCTIONS     ###########
// side bar has score
// side bar looks at current state to show prompt?


//  ##############   RENDER    ###############
	render(){

		return <div class="questionContainer">
			{/* display question */}
			<div className="questionDisplay">
				<h1>{this.props.inheritedState.currentQuestion.question}</h1>
			</div>

			{/* btn to reveal answer for question */}
			{(this.props.inheritedState.showAnswer)? null : <div className="answer">
				<button onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>}


			{/*  reveal buttons to declare right, wrong, or didn't answer */}
			{/*  after any of three buttons pressed */}
			{/*  make call to edit score if right or wrong */}

		</div>
	}
}
