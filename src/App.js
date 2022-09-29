import React from 'react'
import Search from './Search.js'
import Results from './results.js'

class App extends React.Component {
	state = {
			search: '',
			searched: false,
			results:
				[ {
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

		submitSearch = () => {
			this.setState({searched: true})
		}

			getResults = () => {}

	render() {
		return (
			<>
			{this.state.searched == false ?
				<Search storeSearch={this.storeSearch} submitSearch={this.submitSearch} searched={this.state.searched} />
				:
				<Results search={this.state.search} results={this.state.results}
				storeSearch={this.storeSearch}  />}
			</>

		)
	}

}

export default App
