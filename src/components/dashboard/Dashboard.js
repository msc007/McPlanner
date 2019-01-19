import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
		//console.log(this.props);
		const { projects } = this.props;

    return (
      <div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects}/>
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
    )
  }
}

//attach state projects to this component's projects property 
const mapStateToProps = (state) => {
	return {
		projects: state.project.projects
	}
}

//connect Dashboard to high-order component
export default connect(mapStateToProps)(Dashboard);
