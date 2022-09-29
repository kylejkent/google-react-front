import React from 'react'
import Search from './Search.js'
import Results from './results.js'
import axios from 'axios'

class App extends React.Component {
	state = {
			search: '',
			searched: false,
			results:
				[]
		}

		storeSearch = async (e) => {
				// console.log(e.target.value)
				let results = await axios.get(`http://localhost:3002/results?search=${e.target.value}`)
				this.setState({
					search: e.target.value,
					results: results.data
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
