import Languages from './skills/Languages'
import Frameworks from './skills/Frameworks'
import Services from './skills/Services'
import Utilities from './skills/Utilities'

function Skills() {
  return (
    <div className="pt-3 p-3">
      <div className="text-center">
        <h1 className="text-2xl">Skills</h1>
        <p className="font-thin text-center">These are the technologies I use.</p>
      </div>
      <div className="mt-3 container bg-gray-200 rounded-lg p-3">
        <Languages />
        <Frameworks />
        <Services />
        <Utilities />
      </div>
    </div>
  )
}

export default Skills;