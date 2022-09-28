import React from 'react'
import Navbar from './Navbar.js'
import Result from './Result.js'

class Results extends React.Component {
	state = {
		search: 'Java',
		qtyResults: 3,
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
	render() {
    return (
			<>
				<Navbar />
						<section className="resultsPage">
							<div className="searchPath">
								<span className="searchPath">{this.state.qtyResults}</span>
								<span className="searchPath">{this.state.search}</span>
							</div>
						</section>
					{this.state.results.map((result, i) => {
						return <Result key={i} result={result} />
					})}
			</>
    )
  }
}

export default Results;
