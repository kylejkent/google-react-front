import React from 'react'
import Result from './Result'

class Results extends React.Component {
	state = {
		search: '',
		qtyResults: 0,
		results: [ {
			url: 'mysite.com',
			title: 'My Site',
			description: 'This is the description of my site.',
			links: {
				}
			},
			{
				url: 'mysite22.com',
				title: 'My 2nd Site',
				description: 'This is thfadsadfe description of my site.',
				links: {
					}
				},
		]
	}

	storeSearch = (e) => {
		console.log(e.target.value)
		this.setState({
			search: e.target.value
		})
	}

	render() {
    return (
			<>
				<section className="resultsPage">
						<div className="numres">
							<span className="numres">{this.state.qtyResults} search results found</span>
							<span className="numres">{this.state.search}</span>
						</div>
					</section>
					{this.state.results.map((result, index) => {
						return (
							<Result result={result} key={index}/>
						)
					})}



			</>
    )
  }
}

export default Results;
