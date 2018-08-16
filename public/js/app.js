
//    ########    CONSTRUCTOR   ###########
class App extends React.Component {
	constructor(props){
		super(props)
		this.toggleAnswer = this.toggleAnswer.bind(this)
		this.toggleAnswerOff = this.toggleAnswerOff.bind(this)
		this.addToScore = this.addToScore.bind(this)
		this.subtractScore = this.subtractScore.bind(this)
		this.showBoard = this.showBoard.bind(this)
		this.queryQuestion = this.queryQuestion.bind(this)
		this.createBoard = this.createBoard.bind(this)
		this.selectQuestion = this.selectQuestion.bind(this)
		this.pickAgain = this.pickAgain.bind(this)
		this.updateCurrentUser = this.updateCurrentUser.bind(this)
		this.signOut = this.signOut.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
    	this.addNewUser = this.addNewUser.bind(this)
		this.gameEnd = this.gameEnd.bind(this)
		this.deleteUser = this.deleteUser.bind(this)

		this.state ={
			boardState: false, // describes whether each question on the board has been selected
			currentQuestion: null, // describes currently selected question
			currentUser: null, // describes current user
			showAnswer: false, // describes whether answer should be shown in the question class
			score: 0, // describes the player's score
			questions: [], // describes the total list of questions
			categories: [], // describes the categories of the game
			currentValue: 0, // describes value of current question according to our board
			showQuestion: false, // describes whether the question should be shown. if not, show the appropriate prompt
			users: []
		}
	}

	componentDidMount() {
		this.createBoard()
   	fetch('/users')
      	.then((response) => {return response.json()})
      	.then((data) => {this.setState({ users: data }) });
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


	toggleAnswer(event){
		let showAnswer = this.state.showAnswer
		this.setState({
			showAnswer: !showAnswer
		})
	}
	// turn false if new question is selected
	toggleAnswerOff(){
		let showAnswer = this.state.showAnswer
		this.setState({
			showAnswer: false
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

	// update current user/password
	updateCurrentUser(username, password){
		this.setState({
			currentUser:
				username,
				password
		})
	}

	handleSubmit(username, password) {
    console.log(username, password)
    event.preventDefault();
    // this.updateCurrentUser(username, password)
    let body = JSON.stringify({"username": username, "password": password})
    console.log(body)
		fetch('/users/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
			},
			body: body
		}).then(response => response.json())
			.then(foundUser => {
				if (!!foundUser) {
					this.setState({currentUser: foundUser})
					this.createBoard()
				} else {
					fetch('/users/find/' + username)
						.then(response => response.json())
						.then(user => {
							if (!!user) {
								return
							} else {
								fetch('/users', {
									method: 'POST',
									headers: {
										'Accept': 'application/json, text/plain, */*',
										'Content-Type': 'application/json'
									},
									body: body,
								}).then((response) => {return response.json()})
								.then((user)=>{
									this.addNewUser(user)
									this.setState({currentUser: user})
									this.createBoard()
								}).catch(error => console.log(error))
							}
						})
				}
			})
  }

  addNewUser(user) {
    this.setState({
      users: this.state.users.concat(user)
    })
  }

	gameEnd() {
		if (this.state.score > this.state.currentUser.high_score) {
			fetch('/users/' + this.state.currentUser.id, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
				},
				body: JSON.stringify({"high_score": this.state.score})
			}).then(response => {return response.json()})
				.then(user => this.setState({currentUser: user}))
		}
	}

	deleteUser() {
		fetch('/users/' + this.state.currentUser.id, {
			method: 'DELETE'
		}).then(() => this.setState({currentUser: null}))
	}

	// sign out
	signOut() {
		this.setState({
			currentUser: null
		})
	}

	selectQuestion(cat, row, value) {
		let tempBoardState = this.state.boardState
		tempBoardState[cat][row] = false
		this.setState({boardState: tempBoardState, currentValue: value, currentQuestion: this.state.questions[cat][row], showQuestion: true, showAnswer: false})
	}

	render(){
		return <div class="appContainer">
				{/* board */}
				<div class="mainContainer">
					{(this.state.currentUser)
						? (!!this.state.questions.length)
							?
							[
								<Greeting
									deleteUser={this.deleteUser}
									username={this.state.currentUser.username}
									signOut={this.signOut}
									currentHighScore={this.state.currentUser.high_score}
								/>,
								<Board
									inheritedState={this.state}
									data={this.state.currentQuestion}
									selectQuestion={this.selectQuestion}>
								</Board>
							]
							:
								null
						:
							<Auth
								handleSubmit={this.handleSubmit}
							/>
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
						users={this.state.users}
					/>
				</div>
		</div>
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('main')
);
