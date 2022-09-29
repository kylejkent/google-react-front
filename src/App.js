import React from 'react'
import Search from './Search.js'
import Results from './results.js'

class App extends React.Component {
	state = {
		{
			values:
			{
				name: '',
				open: true
			}
		}
		{
			results:
			{

			}
		}

	}

	updateValues = (e) => {
		console.log(e.target.value)
		this.setState({
			name: e.target.value
		})
	}

	getResults = () => {}

	render() {
		return (
			<>
 				<Search />
				<Results />
			</>

		)
	}

}

export default App
