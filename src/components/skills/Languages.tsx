import cSharpLogo from '../../files/svg/cdnlogo_c.svg'
import typeScriptLogo from '../../files/svg/typescriptlang-icon.svg'
import javaLogo from '../../files/svg/java-icon.svg'
import kotlinLogo from '../../files/svg/kotlinlang-icon.svg'
import jsLogo from '../../files/svg/js-icon.svg'
import psqlLogo from '../../files/svg/postgresql-icon.svg'

function Languages() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Programming Languages</h1>
      <div className="mt-2 flex flex-wrap justify-center items-start font-thin">
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={cSharpLogo} alt="test" width="64" height="64"></img>
          <p>C#</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5 w-auto">
          <img src={typeScriptLogo} alt="test" width="64" height="64"></img>
          <p>TypeScript</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={javaLogo} alt="test" width="64" height="64"></img>
          <p>Java</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={kotlinLogo} alt="test" width="64" height="64"></img>
          <p>Kotlin</p>
        </div>
        <div className="ml-2 flex flex-col items-center mx-5">
          <img src={jsLogo} alt="test" width="64" height="64"></img>
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={psqlLogo} alt="test" width="64" height="64"></img>
          <p>PostgreSQL</p>
        </div>
      </div>
    </div>
  )
}

export default Languages;