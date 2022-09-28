import React from 'react'

class Result extends React.Component {
	render() {
		const styles = {
			result: {
				marginBottom: '40px'
			},
			unorderedList: {
				paddingLeft: '1px',
				margin: '0px',
				listStyleType: 'none'
			},
			list: {
				display: 'inline-block',
				marginRight: '6px'
			}
		}
    return (
			<>
				<section className="searchResults" style={styles.result}>
						<small>{this.props.result.url}</small>
						<h1>
						<a href={this.props.result.url} target="_blank"
						>{this.props.result.title}</a
						>
						</h1>
						<p>{this.props.result.description}</p>
							<ul style={styles.unorderedList}>
							{this.props.result.links.map((link, i) => (
								<li key={i} >
									<a href={link.url} target="_blank" style={styles.list}>{link.title} </a>
								</li>
							))}
							</ul>
				</section>
			</>
    )
  }
}

export default Result;
