import React from 'react'

class Results extends React.Component {
	state = {
		search: 'Java',
		qtyResults: 3
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
{/*** NAV PARTIAL START *** will add as a component/}
					<nav>
					<a href="/" className="googleLogo resultsLogo"><img
					className="googleLogo resultsLogo"
					src="/img/google.png"
					alt="Google logo"
					/></a>

					<form action="/results" method="post">
					<input type="search" name="search" onKeyUp={e => this.storeSearch(e)}  />
					<button className="primary resultsPage">Search</button>
					</form>
					</nav>
{/*** NAV PARTIAL END ***/}
					<section className="resultsPage">
						<div className="searchPath">
							<span className="searchPath">{this.state.qtyResults}</span>
							<span className="searchPath">{this.state.search}</span>
						</div>
					</section>
{/*** RESULTS LINK ARRAY START ***/}
{/** comment out results/}
					{/<section class="searchResults">/}
						{/{{#each results as |result|}}/}
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
{/*** RESULTS LINK ARRAY END ***/}
			</>
    )
  }
}

export default Results;
