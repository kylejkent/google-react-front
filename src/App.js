function App() {
  return (
		<div class="wrap-sm">
      <img class="logofront" src="img/google.png" alt="Google logo" />
      <form action="/results" method="post">
        <input type="search" name="search" autofocus />
        <button class="primary">Search</button>
      </form>
    </div>
  )
}

export default App;
