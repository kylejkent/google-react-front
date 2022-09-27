import React from 'react'

class Results extends React.Component {
	state = {
		search: 'Java'
	}
	render() {
    return (
			<>
// *** NAV PARTIAL START ***
					// {> navresults}
// *** NAV PARTIAL END ***
					<section className="resultsPage">
						<div className="searchPath">
							<span className="searchPath">{qtyText}</span>
						</div>
					</section>
// *** RESULTS LINK ARRAY START ***
					<section class="searchResults">
						{{#each results as |result|}}
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
						{{/each}}
					</section>
// *** RESULTS LINK ARRAY END ***
			</>
    )
  }
}

export default Results;
