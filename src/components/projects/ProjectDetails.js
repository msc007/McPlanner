import React from 'react'

export default function ProjectDetails(props) {

	const id = props.match.params.id;

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid nam distinctio beatae fugit fugiat consequuntur est itaque enim maxime architecto consectetur, iusto esse suscipit necessitatibus voluptatum ut natus laboriosam!</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by MC</div>
					<div>16th January, 10pm</div>
				</div>
			</div>
		</div>
	)
}
