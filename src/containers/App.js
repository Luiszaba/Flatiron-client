const App = (props) => {
    return(
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/comment_input" component={CommentInput} />
          <Route exact path="/song_input" component={SongInput} />
          <Route exact path="/songs" component={Songs} />
        </div>
      </Router>
    )
  }