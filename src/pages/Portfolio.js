import React from 'react'
import Projects from "../Projects.json"
import Project from "../components/Project"

function Portfolio () {

    const projectsMap = Projects.map(project => {
        return (
        <Project projectItem={project} key={project.id} />
        )
    })
    return (
        <div>
            <div className="container main-container col-12 col-md-10 offset-md-1 clear-fix mt-3">
            <div className="row">
                <div className="col-md-12 col-12  m-2">
                    <h1 className="border-bottom border-secondary" >Portfolio</h1>
                </div>
            </div>    
            <div className="row port-img-row  ml-auto mr-auto">
                <div>
                    {projectsMap}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio