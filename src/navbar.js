import React from 'react'

class Navbar extends React.Component {
	state = {
		search: 'Java'
	}
	render() {
    return (
			<>
			<nav className="searchres2">
					<a><img  className="logofront logoresults" src="img/google.png" alt="Google logo"
					/></a>

					<form action="/results" method="post">
						<input type="search" className="resultspage" name="search"/>
						<button className="primary resultspage">Search</button>
					</form>
				</nav>
			</>
    )
  }
}

export default Navbar;
