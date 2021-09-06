import springLogo from '../../files/svg/springio-icon.svg'
import reactLogo from '../../files/svg/reactjs-icon.svg'
import jQueryLogo from '../../files/svg/jquery-icon.svg'

function Frameworks() {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold text-center">Libraries and Frameworks</h1>
      <div className="mt-2 flex flex-wrap justify-center items-start font-thin">
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={springLogo} alt="test" width="64" height="64"></img>
          <p>Spring</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5 w-auto">
          <img src={reactLogo} alt="test" width="64" height="64"></img>
          <p>React</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={jQueryLogo} alt="test" width="64" height="64"></img>
          <p>jQuery</p>
        </div>
      </div>
    </div>
  )
}

export default Frameworks;