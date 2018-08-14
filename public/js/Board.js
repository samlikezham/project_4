//    #########   CONSTRUCTOR    ############
//  keep track in state
//    boardstate

//PROPS
//    array of categories
//    2D array of questions
//    2D  array of if cell is clickable
//    function for setting current question - passed in from app.js
//    function for toggling prompt - passed in from app.js





//    ###########   FUNCTIONS   ##########
//    onclick
//      set current question
//      display current question in sidebar
//      change corresponding spot in clickable 2D array to false


// #############    RENDER     ################
//  table
//    for each category
//      cell that has category name
//    for 5 rows grab a question from each category
//    each cell should display the value that's it's worth
//      onclick event that will toggle to current question
//  for each cell we give a ternary if spot in clickable array is true - display value amout and have onclick event - display null/blue screen if not clickable

class Board extends React.Component {
	constructor(props){
		super(props)
		this.selectQuestion = this.selectQuestion.bind(this)
	}

	selectQuestion(cat, row, value) {
		this.props.selectQuestion(cat, row, value)
	}

	render() {
		let categories = this.props.inheritedState.categories
		let questions = this.props.inheritedState.questions
		let boardState = this.props.inheritedState.boardState
		let categoryData = []
		let boardData = []
		let fiveArr = [0,1,2,3,4]
		let sixArr = [0,1,2,3,4,5]

		for (let cat = 0; cat < categories.length; cat++) {
			categoryData.push(<th>{categories[cat]}</th>)
		}
		for (let row = 0; row < questions[0].length; row++) {
			let rowData = []
			let value = 1*200 + row*200
			for (let cat = 0; cat < questions.length; cat++) {
				rowData.push((boardState[cat][row]) ? <td onClick={() => this.selectQuestion(cat, row, value)}>{value}</td> : <td></td>)
			}
			boardData.push(<tr>{rowData}</tr>)
		}

		return <div className="container">
			<table>
				<tr className="category_data">
					{categoryData}
				</tr>
				{boardData}
			</table>
		</div>
	}
}
