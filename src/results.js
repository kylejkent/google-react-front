import React from 'react'
import Result from './Result'

class Results extends React.Component {
	state = {
		search: '',
		qtyResults: 0,
		results: [ {
			url: 'https://www.w3schools.com/js/default.asp',
			title: 'JavaScript Tutorial - W3School',
			description: 'Well organized and easy to understand Web building tutorials with lots	of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
			links: [
				{title: "JavaScript Introduction", url: "https://www.w3schools.com/js/js_intro.asp"},
				{title: "JS Functions", url: "https://www.w3schools.com/js/js_functions.asp"},
				{title: "JavaScript Examples", url: "https://www.w3schools.com/js/js_examples.asp"}
				]
			},
			{
				url: 'mysite22.com',
				title: 'My 2nd Site',
				description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting langauge for Web pages, CouchDB, and Adobe Acrobat.',
				links: [
					{title: "Alright Site", url: "www.alrightsite.com"},
					{title: "Super Cool Site", url: "www.supercoolsite.com"}
				]
			},
			{
				url: 'https://www.w3schools.com/js/default.asp',
				title: 'JavaScript Tutorial - W3School',
				description: 'Well organized and easy to understand Web building tutorials with lots	of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
				links: [
					{title: "JavaScript Introduction", url: "https://www.w3schools.com/js/js_intro.asp"},
					{title: "JS Functions", url: "https://www.w3schools.com/js/js_functions.asp"},
					{title: "JavaScript Examples", url: "https://www.w3schools.com/js/js_examples.asp"}
					]
				}
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
				<header>
		      <div>
						<a href="/">
		        <img className="logoresults" src="img/google.png" alt="Google logo" />
						</a>
		      </div>
		      <form action="/results" method="post">
		        <input type="text" name="searchres2"  autofocus/>
		        <button className="primary resultspage">
		          Search
		        </button>
		      </form>
	    	</header>
				<section>
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
