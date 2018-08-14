
//  #########     CONSTRUCTOR     ###########
class Sidebar extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    console.log(this.props.inheritedState);
    let inheritedState = this.props.inheritedState
    return(
      <div className="display">
        <div className="display_score">
        {inheritedState.score}
        </div>
        <div className="toggle_prompt">
        {(inheritedState.currentQuestion) ? <Question data={inheritedState.currentQuestion} toggleAnswer={inheritedState.toggleAnswer}/>: <Prompt/> }
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
