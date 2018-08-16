class Answer extends React.Component {
  render() {
    return <div class="answerContainer">
      <h1>{this.props.inheritedState.currentQuestion.answer}</h1>
      <div className="scoreBtns">
        {/*  after point is added/subtracted call to toggle prompt */}
          <button className="correct_btn" onClick={()=>
          {this.props.addToScore()}}>
          Correct!</button>
          <button className="incorrect_btn" onClick={()=>
          {this.props.subtractScore()}}>
          Incorrect</button>
          <button className="noanswer_btn" onClick={this.props.pickAgain}>Did Not Answer</button>
      </div>
    </div>
  }
}
