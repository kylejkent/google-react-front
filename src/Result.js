import React from 'react'
import Results from './results'

class Result extends React.Component {

	render() {
		return (

			<section className="singleResult">
				<h1> {this.props.result.title} </h1>
				<span> {this.props.result.url} </span>
				<p> {this.props.result.description}</p>
			</section>
		)}
}

export default Result
