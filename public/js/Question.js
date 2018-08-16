//   ###########  FUNCTIONS     ###########
// side bar has score
// side bar looks at current state to show prompt?


//  ##############   RENDER    ###############
{/*  reveal buttons to declare right, wrong, or didn't answer */}
{/*  after any of three buttons pressed */}
{/*  make call to edit score if right or wrong */}
class Question extends React.Component {
	render(){
		return <div class="questionContainer">
			{/* display question */}
			<div className="questionDisplay">
				<h1>{this.props.inheritedState.currentQuestion.question}</h1>

				<li><strong>Value:</strong> {this.props.inheritedState.currentValue} </li>
			</div>

			{/* btn to reveal answer for question */}
			<div className="answer">
				{(this.props.showAnswer)
					?
						<li><strong>Answer:</strong>{this.props.inheritedState.answer}</li>
					:
						null}
					<button className="reveal_btn" onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>
		</div>
	}
}
