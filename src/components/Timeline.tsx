import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Timeline() {
  return (
    <div className="pt-3 text-center p-3">
      <h1 className="text-2xl">Experience</h1>
      <p className="font-thin text-center">This is a timeline of my professional experience in reverse chronological order.</p>
      <div className="mt-2 container bg-gray-200 rounded-lg">
        <div className="relative p-3">
          <div className="flex items-center bg-gray-400 shadow-xl rounded-full w-10/12 mx-auto">
            <h1 className="mx-auto font-semibold text-lg text-white">2018-2021</h1>
          </div>
          <div className="bg-gray-400 flex flex-col mt-2 rounded-lg text-white font-normal items-center">
            <h1 className="text-xl">BSc in Computer Science Engineering</h1>
            <hr className="w-32 mt-1 font-normal"></hr>
            <h2 className="mt-1">ISEL (Instituto Superior de Engenharia de Lisboa) <FontAwesomeIcon icon={faLink}/></h2>
            <hr className="w-32 mt-1"></hr>
            <p className="text-left mx-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum nihil recusandae dicta commodi tenetur, incidunt at quos. Debitis possimus cumque eius impedit eligendi dolor harum. Dolorem reiciendis voluptas doloremque.</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;