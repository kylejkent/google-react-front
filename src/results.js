import React from 'react'
import Navbar from './Navbar.js'
import Result from './Result.js'

class Results extends React.Component {
	state = {
		search: 'Java',
		results: [{
  _id: "63241960a933b913c25433f5",
  title: "The Modern JavaScript Tutorial",
  description: "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming",
  url: "https://javascript.info",
  links: [
    {
      title: "An Introduction to JavaScript",
      url: "https://javascript.info/intro"
    },
    {
      title: "Hello, world!",
      url: "https://javascript.info/hello-world"
    },
    {
      title: "Objects",
      url: "https://javascript.info/object"
    }
  ]
}]
	}
	storeSearch = (e) => {
		console.log(e.target.value)
		this.setState({
			search: e.target.value
		})
	}
	qtyText = () => {
		return this.state.results.length == 1
			? this.state.results.length + ' Result'
			: this.state.results.length + ' Results'
	}
	render() {
    return (
			<>
				<Navbar />
						<main>
						<section className="resultsPage">
							<div className="searchPath">
								<span className="searchPath">{this.qtyText()}</span>
							</div>
						</section>
						<Result result={this.state.results[0]} />
					{this.state.results.map((result, i) => {
						return <Result key={i} result={result} />
					})}
					</main>
			</>
    )
  }
}


export default Results;
