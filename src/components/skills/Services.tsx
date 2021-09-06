import dockerLogo from '../../files/svg/docker.svg'
import herokuLogo from '../../files/svg/heroku-icon.svg'
import firebaseLogo from '../../files/svg/firebase-icon.svg'
import gcpLogo from '../../files/svg/google_cloud-icon.svg'

function Services() {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold text-center">Services</h1>
      <div className="mt-2 flex flex-wrap justify-center items-end font-thin">
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={dockerLogo} alt="test" width="64" height="64"></img>
          <p>Docker</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5 w-auto">
          <img src={herokuLogo} alt="test" width="64" height="64"></img>
          <p>Heroku</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={firebaseLogo} alt="test" width="64" height="64"></img>
          <p>Firestore</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={gcpLogo} alt="test" width="64" height="64"></img>
          <p>GCP</p>
        </div>
      </div>
    </div>
  )
}

export default Services;