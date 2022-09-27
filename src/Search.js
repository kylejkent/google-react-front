import React from 'react'

class Search extends React.Component {
	state = {
		name: '',
		open: true
	}

	storeSearch = (e) => {
		console.log(e.target.value)
		this.setState({
			name: e.target.value
		})
	}

	render() {
		return (
		<div className="wrap-sm">
		  <img className="logofront" src="img/google.png" alt="Google logo" />
		  <form action="/results" method="post">
		    <input type="search" name="search" onKeyUp={e => this.storeSearch(e)}  />
		    <button className="primary" >Search</button>
		  </form>
		</div>
		)
	}

}

export default Search
