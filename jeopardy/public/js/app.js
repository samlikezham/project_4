
//    ########    CONSTRUCTOR   ###########
class App extends React.Component {
	constructor(props){
		super(props)
		this.toggleAnswer = this.toggleAnswer.bind(this)
		this.addToScore = this.addToScore.bind(this)
		this.subtractScore = this.subtractScore.bind(this)
		this.showBoard = this.showBoard.bind(this)
		this.queryQuestion = this.queryQuestion.bind(this)
		this.newQuestionBatch = this.newQuestionBatch.bind(this)
		// track in state
			  // boardstate
			  // current question
			  // current user defaults to null
			  // current score
		this.state ={
			boardState: false,
			currentQuestion: null,
			currentUser: null,
			showAnswer: false,
			score: 0,
			questions: []
		}
	}

	queryQuestion(count=1){
		fetch(`http://jservice.io/api/random?count=${count}`).then((response)=>{
			response.json().then((data)=>{
				console.log(data);
				this.setState({ 
					currentQuestion: data[0],
					// questions: data.map(q => {
					// 	return {
					// 		category: q.category.title,
					// 		value: q.value,
					// 		question: q.question,
					// 		answer: q.answer
					// 	}
					})
				})
			})
		})
	}


// 	#########   FUNCTIONS   ############
	// setters for everything
		// answer toggle to show
	toggleAnswer(event){
		let showAnswer = this.state.showAnswer
		this.setState({
			showAnswer: !showAnswer
		})
	}
	// score setters
	addToScore(){
		console.log(this.state.currentQuestion)
		let newScore = this.state.score + this.state.currentQuestion.value
		this.setState({score: newScore})
	}
	subtractScore(){
		let newScore = this.state.score - this.state.currentQuestion.value
		this.setState({score: newScore})
	}

	// board setter
	showBoard(){
		this.setState({
			boardState: true
		})
	}

	// current user
	currentUser(){
		this.setState({
			currentUser: true
		})
	}


//   ########    RENDER    ############
	//  boolean show question - if true - show question if false - show prompt
	//  prompt toggle to show
	render(){

		return <div>

				{/* board */}
				<button onClick={this.queryQuestion}>Prompt to Question</button>
					{(this.state.currentQuestion !== null) ? 
					<Board data={this.state.currentQuestion}>
					</Board> : null}

				{/* toggle answer */}
				<div className="answer">
					{(this.state.showAnswer) ? 
					<li>{this.state.currentQuestion.answer}</li> : ''}
					<button onClick={this.toggleAnswer}>Click to reveal answer</button>
				</div>

				{/* scorekeeper */}
				<div className="scoreKeeper">
					<h2>{this.state.score}</h2>
					<button onClick={this.addToScore}>Add Point</button>
					<button onClick={this.subtractScore}>Subtract Point</button>
				</div>

				{/* sidebar and auth */}
				<div className="sidebar">
					{(this.state.currentUser !== null) ?
					 <h1>Sidebar Goes Here</h1> : <h1>Auth Goes Here</h1>}
				</div>
		</div>
	}
}



ReactDOM.render(
	<App />,
	document.querySelector('main')
);
