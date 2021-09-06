import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projects from '../constants/projects'

function Projects() {
  return (
    <div className="mt-2 p-3">
      {
        /**
         * Might use for diagonal lines later
         * <div className="h-5 mt-3 bg-secondary-color w-screen transform -skew-y-2"/>
         * <div className="h-5 bg-secondary-color w-screen transform skew-y-2"/>
         */
      }
      <h1 className="text-2xl text-center">Projects</h1>
      <p className="font-thin text-center">These are the projects I have built.</p>
      <div className= "bg-gray-200 rounded-lg mt-1">
        <div className="mt-2 p-3 flex flex-col m-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:ml-16 xl:ml-auto">
          {
            projects.map((project) => 
              <div className="mt-2 mb-2 flex flex-col text-left items-center">
                <img src={require('../files/png/' + project.images + '.png').default} className="h-64" alt="test"></img>
                
                <div className="flex flex-wrap items-center mt-2">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  {
                    project.liveUrl != null && <a href={project.liveUrl}><FontAwesomeIcon icon={faEye} className="ml-3"/></a>
                  }
                  {
                    project.gitHubUrl != null && <a href={project.gitHubUrl}><FontAwesomeIcon icon={faGithub} className="ml-3"/></a>
                  }
                </div>
                <div className="mt-1 flex flex-initial pr-max w-auto flex-wrap">
                  {
                    project.technologies.map((technology) =>
                    <div className="mt-1 mr-2 p-1.5 text-xs bg-white transition ease-in-out hover:bg-black hover:text-white rounded-md uppercase tracking-wide font-semibold">
                      {technology}
                    </div>
                  )
                  }
                </div>
                <h3 className="mt-2 text-md break-words font-thin sm:ml-3">{project.description}</h3>
              </div>  
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;