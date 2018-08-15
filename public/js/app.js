
//    ########    CONSTRUCTOR   ###########
class App extends React.Component {
	constructor(props){
		super(props)
		this.toggleAnswer = this.toggleAnswer.bind(this)
		this.addToScore = this.addToScore.bind(this)
		this.subtractScore = this.subtractScore.bind(this)
		this.showBoard = this.showBoard.bind(this)
		this.queryQuestion = this.queryQuestion.bind(this)
		this.createBoard = this.createBoard.bind(this)
		this.selectQuestion = this.selectQuestion.bind(this)
		this.pickAgain = this.pickAgain.bind(this)

		this.state ={
			boardState: false, // describes whether each question on the board has been selected
			currentQuestion: null, // describes currently selected question
			currentUser: "bob", // describes current user
			showAnswer: false, // describes whether answer should be shown in the question class
			score: 0, // describes the player's score
			questions: [], // describes the total list of questions
			categories: [], // describes the categories of the game
			currentValue: 0, // describes value of current question according to our board
			showQuestion: false, // describes whether the question should be shown. if not, show the appropriate prompt
			gameOver: false
		}
	}

	componentDidMount() {
		this.createBoard()
	}

	// have to do the async thing along with the stuff in queryCategory so we wait for catQuestions to be set before moving on.
	async createBoard() {
		let categories = []
		let boardState = []
		let questions = []
		let trueRow = new Array(5).fill(true)

		let catQuestions = []

		// for each category, generate a random int and get the questions
		// also, push an array of true onto boardState
		// for each question, push question into array
		for (let category = 0; category < 6; category++) {
			catQuestions = await this.queryCategory(Math.ceil(Math.random() * 18000));
			console.log(catQuestions);
			categories.push(catQuestions.title);
			boardState.push(trueRow.slice())
			questions.push([])
			for (let question = 0; question < 5; question++) {
				questions[category].push(catQuestions.clues[question])
			}
		}
		this.setState({boardState: boardState, categories: categories, questions: questions})
	}

	queryCategory(catId) {
		return new Promise((resolve, reject) => {
			let urlString = "http://jservice.io/api/category?id=" + catId
			fetch(urlString).then(response => {
				response.json().then(data => {
					resolve(data);
				})
			}).catch(error => reject(error))
		})
	}

	queryQuestion(count=1){
		fetch("http://jservice.io/api/random?count=#{count}").then((response)=>{
			response.json().then((data)=>{
				console.log(data);
				this.setState({
					currentQuestion: data[0]
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
	addToScore(event){

		let newScore = this.state.score + this.state.currentValue
		this.setState({score: newScore})
		this.pickAgain()
	}
	subtractScore(event){
		let newScore = this.state.score - this.state.currentValue
		this.setState({score: newScore})
		this.pickAgain()
	}

	pickAgain() {

		let isOver = !this.state.boardState.map((arr) => (arr.reduce((total, current) => (!!total || !!current)))).reduce((total, current) => (!!total || !!current))
		console.log(isOver);
		this.setState({showQuestion:false, showAnswer:false, gameOver:isOver})
		if (isOver) {
			this.gameEnd()
		}
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

	selectQuestion(cat, row, value) {
		let tempBoardState = this.state.boardState
		tempBoardState[cat][row] = false
		this.setState({boardState: tempBoardState, currentValue: value, currentQuestion: this.state.questions[cat][row], showQuestion: true, showAnswer: false})
	}

	gameEnd() {
		//fetch high score
		//if high score < this.state.score {
		//	display that the player got a high score
		//	put the new high score in the database
		//	store the fact that there's a new high score
		//}
	}
	}

//   ########    RENDER    ############
	//  boolean show question - if true - show question if false - show prompt
	//  prompt toggle to show
	render(){
		return <div class="appContainer">

				{/* board */}
				<div class="mainContainer">
					{(this.state.currentUser)
						? (!!this.state.questions.length)
							?
								<Board
									inheritedState={this.state}
									data={this.state.currentQuestion}
									selectQuestion={this.selectQuestion}>
								</Board>
							:
								null
						:
							<Auth/>
					}
				</div>


				{/* sidebar and auth */}
				<div class="sidebar">
					<Sidebar
						inheritedState={this.state}
						toggleAnswer={this.toggleAnswer}
						addToScore={this.addToScore}
						subtractScore={this.subtractScore}
						pickAgain={this.pickAgain}
					/>
				</div>
		</div>
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);
