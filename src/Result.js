import React from 'react'
import Results from './results'

class Result extends React.Component {

	render() {
		return (
			<section className="singleResult">
				<span className="sm"> {this.props.result.url} </span>
				<a className="noline" href={this.props.result.url}><h2> {this.props.result.title} </h2></a>
				<p> {this.props.result.description}</p>
				<ul>
					{this.props.result.links.map((link, index) => {
						return (
							<li>
								<a class="sm" href={link.url}> {link.title} </a>
							</li>
						)
					})}
				</ul>
			</section>
		)}
}

export default Result
