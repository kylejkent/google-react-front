import React from 'react'
import Search from './Search.js'
import Results from './results.js'

class App extends React.Component {
	state = {
			search: '',
			searched: false,
			results:
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
			{this.state.searched == false ? <Search storeSearch={this.storeSearch} submitSearch={this.submitSearch}/> : <Results search={this.state.search} results={this.state.results}
			storeSearch={this.storeSearch}  />}
			</>

		)
	}

}

export default App
