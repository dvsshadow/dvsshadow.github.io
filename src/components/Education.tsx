import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
  return (
    <div className="pt-3 text-center p-3">
      <h1 className="text-2xl">Education</h1>
      <p className="font-thin text-center">This is my academic career.</p>
      <div className="mt-2 container bg-gray-200 rounded-lg">
        <div className="relative p-3">
          <div className="flex items-center bg-gray-400 shadow-xl rounded-full w-5/12 mx-auto">
            <h1 className="mx-auto font-semibold text-lg text-white">2018-2021</h1>
          </div>
          <div className="bg-gray-400 flex flex-col mt-2 rounded-lg text-white font-normal items-center w-5/12 mx-auto">
            <h1 className="text-xl">BSc in Computer Science Engineering</h1>
            <hr className="w-32 mt-1 font-normal"></hr>
            <h2 className="mt-1 mb-1">ISEL (Instituto Superior de Engenharia de Lisboa) <a href="https://isel.pt/"><FontAwesomeIcon icon={faLink}/></a></h2> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;