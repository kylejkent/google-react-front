import React from 'react'
import App from './App.js'

class Search extends React.Component {
	render() {
		return (
		<div className={this.props.searched == false ? "wrap-sm" : "header"}>

		  <a href="/"><img className={ this.props.searched == false ? "logofront" : "logoresults"} src="img/google.png" alt="Google logo" /> </a>
			<div>
		    <input type="search" name={this.props.searched == false ? "search" : "searchres2"} value={this.props.search} onChange={e => this.props.storeSearch(e)}   />
		    <button className={this.props.searched == false ? "" : "resultspage"} onClick={() => this.props.submitSearch()}>Search</button>
			</div>
		</div>
		)
	}

}

export default Search
