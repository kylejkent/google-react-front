function App() {
  return (
		<div class="wrap-sm">
      <img className="logofront" src="img/google.png" alt="Google logo" />
      <form action="/results" method="post">
        <input type="search" name="search" autofocus />
        <button className="primary">Search</button>
      </form>
    </div>
  )
}

export default App;
