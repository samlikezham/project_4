
class Question extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div class="questionContainer">
			{/* display question */}
			<div className="questionDisplay">
				<h1>{this.props.inheritedState.question}</h1>
				<li><strong>Value:</strong> {this.props.inheritedState.value} </li>
			</div>

			{/* btn to reveal answer for question */}
			<div className="answer">
				{(this.props.showAnswer) 
					? 
						<li><strong>Answer:</strong>{this.props.inheritedState.answer}</li> 
					: 
						null} 
					<button onClick={()=> {this.props.toggleAnswer()}}>Click to Reveal Answer</button>
			</div>


			{/*  reveal buttons to declare right, wrong, or didn't answer */}
			{/*  after any of three buttons pressed */}
			{/*  make call to edit score if right or wrong */}
			{/*  after point is added/subtracted call to toggle prompt */}
			<div className="scoreBtns">
					<button onClick={()=>
					{this.props.addToScore(); this.props.togglePromptOn()}}>
					Correct!</button>

					<button onClick={()=>
					{this.props.subtractScore(); this.props.togglePromptOn()}}>
					Incorrect</button>
					
					<button onClick={this.props.togglePromptOn}>
					Did Not Answer</button>
			</div>

		</div>
	}
}
