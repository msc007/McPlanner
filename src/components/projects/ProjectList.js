import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default function ProjectList({projects}) {
	return (
		<div className="project-list section">
			{ projects && projects.map(project => {
				return (
					<Link to={'/project/' + project.id}>
						<ProjectSummary project={project} key={project.id} />
					</Link>
				)
			})}
		</div>
	)
}
