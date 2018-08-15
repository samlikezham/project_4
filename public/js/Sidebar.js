
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.togglePromptOn = this.togglePromptOn.bind(this)
		this.togglePromptOff = this.togglePromptOff.bind(this)
		this.state = {
			showPrompt: false
		}
  	}

  	togglePromptOn(){
		this.setState({
			showPrompt: true
		})
	  }

	  togglePromptOff(){
		this.setState({
			showPrompt: false
		})
	  }

  render() {

    let users = this.props.inheritedState.users.map((user) => {
      return(
        <div key={user.id}>
          <p>username: {user.username}</p>
          <p>highest score: {user.high_score}</p>
        </div>
      )
    })


    let inheritedState = this.props.inheritedState
    return(
      <div className="display">
      {(inheritedState.currentUser) ?
        <div className="display_score" id="score">
         {inheritedState.score}
        </div>
        : null
      }
      <div className="toggle_prompt">
        {(inheritedState.showQuestion) ? <Question
          inheritedState={inheritedState}
          toggleAnswer={this.props.toggleAnswer}
          />: <Prompt inheritedState={this.props.inheritedState}/> }
        </div>
        {(inheritedState.showAnswer) ? <Answer inheritedState={this.props.inheritedState} pickAgain={this.props.pickAgain}
	        addToScore={this.props.addToScore}
	        subtractScore={this.props.subtractScore}
        /> : null}
        <div>
        {users}
        </div>
      </div>
    )
  }
}
//  Keep track of in state
//    current score
//    prompt toggle to show


//  ########  FUNCTIONS    ###########
//  score tracker
//    pass in value of question
//    pass in boolean true for correct false for incorrect
//    this.setState to update score -> will update page


//  prompt toggle
//    get current value and set to !value


//########     RENDER      ###########
//show player current score
//    remove buttons and question and answer
//  in place put prompt to choose next question on the board
