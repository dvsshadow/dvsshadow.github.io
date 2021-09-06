function Header() {

    return (
      <nav className="flex items-center h-16 fixed top-0 z-10 w-full shadow-sm font-thin bg-secondary-color">
        <div className="pl-8 pr-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>
        <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <a href="/" className="p-4">Home</a>
          <a href="/" className="p-4">Projects</a>
          <a href="/" className="p-4">Experience</a>
          <a href="/" className="p-4">Skills</a>
        </div>
      </nav> 
    )
}


export default Header;