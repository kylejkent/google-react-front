import React from 'react'

class Navbar extends React.Component {
	state = {
		name: '',
		open: true
	}

	storeSearch = (e) => {
		console.log(e.target.value)
		this.setState({
			name: e.target.value
		})
	}

	render() {
		const styles = {
			nav: {
				  display: 'grid',
				  gridTemplateColumns: '200px auto',
					marginTop: '10px'
				},
			input: {
			  width: '400px',
			  marginRight: '20px',
			  color: '#5b5b5b',
			  height: '40px',
			  borderRadius: '30px',
			  border: '1px solid grey',
			  paddingLeft: '10px',
				display: 'inline-block',
				marginTop: '0px'
			},
			logo: {
				width: '150px',
				margin: 'auto',
				marginRight: '30px',
				display: 'block'
			}
			}
		return (
			<nav style={styles.nav}>
				<a href="/">
					<img style={styles.logo}
					src="/img/google.png"
					alt="Google logo"
					/>
				</a>

				<form>
					<input type="search" name="search" onKeyUp={e => this.storeSearch(e)} style={styles.input} />
					<button className="primary resultspage">Search</button>
				</form>
			</nav>
		)
	}

}

export default Navbar
