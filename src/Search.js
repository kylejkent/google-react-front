import React from 'react'
import App from './App.js'

class Search extends React.Component {
	render() {
		return (
		<div className="wrap-sm">
		  <img className="logofront" src="img/google.png" alt="Google logo" />

		    <input type="search" name="search" onKeyUp={e => this.props.storeSearch(e)}  />
		    <button className="primary" onClick={() => this.props.submitSearch()}>Search</button>

		</div>
		)
	}

}

export default Search
