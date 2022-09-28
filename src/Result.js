import React from 'react'

class Result extends React.Component {
	state = {

	}


	render() {
		return (
			<section className="searchResults">
				<div>
					<small>{{result.url}}</small>
					<h1>
						<a href="{{result.url}}" target="_blank"
							>{{result.title}}</a
						>
					</h1>
					<p>{{result.description}}</p>
					<ul>
						{{#each links as |link|}}
						<li><a href="{{link.url}}" target="_blank">{{link.title}}</a></li>
						{{/each}}
					</ul>
				</div>
			</section>

		)
	}

}

export default Result
