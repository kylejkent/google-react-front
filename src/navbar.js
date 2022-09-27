import React from 'react'

class Navbar extends React.Component {
	state = {
		search: 'Java'
	}
	render() {
    return (
			<>
			<nav>
					<a href="/" className="google-logo results-logo"><img
						className="googleLogo resultsLogo"
						src="/img/google.png"
						alt="Google logo"
					/></a>

					<form action="/results" method="post">
						<input type="search" className="resultsPage" name="search"/>
						<button className="primary resultsPage">Search</button>
					</form>
				</nav>
			</>
    )
  }
}

export default Navbar;
