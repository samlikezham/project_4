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
			score: 0
		}
	}


	render() {
		console.log(this.props.data)
		return <div className="container">
			<ul>
				
			</ul>
		</div>
	}
}