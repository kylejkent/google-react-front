import React from 'react'

class Result extends React.Component {
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
// /*** RESULTS LINK ARRAY START ***/
// /** comment out results/
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
// /*** RESULTS LINK ARRAY END ***/
			</>
    )
  }
}

export default Result;
