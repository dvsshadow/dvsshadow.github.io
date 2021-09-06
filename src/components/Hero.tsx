import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPicture from '../files/png/photo_diogo_sousa.jpeg'

function Hero() {
    return (
      <div className="bg-gray-50">
        <div className="text-center">
          <div className="pt-32 flex justify-center items-center">
            <img className="rounded-full object-cover object-center h-56 w-56" src={myPicture} alt="me"/>
          </div>
          <h1 className="text-4xl font-normal mt-1">
            Diogo Sousa
          </h1>
          <h2 className="text-2xl font-light mt-2">
            Junior Software Engineer
          </h2>
          <div className="text-3xl flex justify-center mt-2">
            <a href="https://github.com/dvsshadow"><FontAwesomeIcon className="mr-2" icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/diogovsousa/"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
      </div>
    )
}

export default Hero;