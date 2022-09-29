import React from 'react'
import Result from './Result'
import App from './App'
import Search from './Search'

class Results extends React.Component {

	render() {
    return (
			<>
				<Search className="searchres2"/>
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
