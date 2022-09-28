import React from 'react'

class Result extends React.Component {
	render() {
    return (
			<>
				<section className="searchResults">
						<small>{this.props.result.url}</small>
						<h1>
						<a href={this.props.result.url} target="_blank"
						>{this.props.result.title}</a
						>
						</h1>
						<p>{this.props.result.description}</p>
							<ul>
							{this.props.result.links.map((link, i) => (
								<li key={i}>
									<a href={link.url} target="_blank">{link.title}</a>
								</li>
							))}
							</ul>
					})
				</section>
			</>
    )
  }
}

export default Result;
