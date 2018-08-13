//  #########     CONSTRUCTOR     ###########
class Sidebar extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     showQuestion: '',
  //     showScore: true
  //   }
  // }

  // showScore = () => {
  //   this.setState({
  //     showScore: this.state.show
  //   })
  // }
  render() {
    return(
      <div className='score_box'>
      {/* scorekeeper */}
      <div className="scoreKeeper">
        <h2>{this.props.inheritedstate.score}</h2>
        <button className="score_btn" onClick={this.addToScore}><i class="fas fa-plus"></i> Points</button>
        <button  className="score_btn" onClick={this.subtractScore}><i class="fas fa-minus"></i> Points</button>
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
