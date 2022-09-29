import React from 'react'
import Result from './Result'
import App from './App'

class Results extends React.Component {

	render() {
    return (
			<>
				<header>
		      <div>
						<a href="/">
		        <img className="logoresults" src="img/google.png" alt="Google logo" />
						</a>
		      </div>
		      <form action="/results" method="post">
		        <input type="text" name="searchres2"  autoFocus value={this.props.search} onChange={e => this.props.storeSearch(e)}/>
		        <button className="primary resultspage">
		          Search
		        </button>
		      </form>
	    	</header>
				<section>
						<div className="numres">
							<span className="numres">{this.props.results.length} search results found</span>

						</div>
					</section>
					{this.props.results.map((result, index) => {
						return (
							<Result result={result} key={index}/>
						)
					})}
			</>
    )
  }
}

export default Results;
