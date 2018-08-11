//    ########    CONSTRUCTOR   ###########
//  track in state
//  current question
//  boolean show question - if true - show question if false - show prompt
//  current user defaults to null
//    boardstate
//    current score
//    prompt toggle to show
//  question
//    answer toggle to show


//    #########   FUNCTIONS   ############
//  setters for everything


//    ########    RENDER    ############
//  board
//  sidebar
//  if current user render sidebar otherwise render auth

ReactDOM.render (
  <div>
  <Auth />
  <h1>Jeopardy</h1>
  </div>,
  document.querySelector('main')
)
