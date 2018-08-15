class Answer extends React.Component {
  render() {
    return <div class="answerContainer">
      <h1>{this.props.inheritedState.currentQuestion.answer}</h1>
      <div className="scoreBtns">
        {/*  after point is added/subtracted call to toggle prompt */}
          <button onClick={()=>
          {this.props.addToScore()
            const score = document.querySelector('#score')
        		score.className = score.className + ' score_increase'
            }}>
          Correct!</button>
          <button onClick={()=>
          {this.props.subtractScore()}}>
          Incorrect</button>
          <button onClick={this.props.pickAgain}>Did Not Answer</button>
      </div>
    </div>
  }
}
