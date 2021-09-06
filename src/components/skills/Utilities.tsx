import gitLogo from '../../files/svg/git-scm-icon.svg'
import gitHubLogo from '../../files/svg/github-tile.svg'
import webpackLogo from '../../files/svg/js_webpack-icon.svg'
import gradleLogo from '../../files/svg/gradle-icon.svg'


function Utilities() {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold text-center">Utilities</h1>
      <div className="mt-2 flex flex-wrap justify-center items-end font-thin">
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={gitLogo} alt="test" width="64" height="64"></img>
          <p>Git</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5 w-auto">
          <img src={gitHubLogo} alt="test" width="64" height="64"></img>
          <p>GitHub</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={webpackLogo} alt="test" width="64" height="64"></img>
          <p>Webpack</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={gradleLogo} alt="test" width="64" height="64"></img>
          <p>Gradle</p>
        </div>
      </div>
    </div>
  )
}

export default Utilities;