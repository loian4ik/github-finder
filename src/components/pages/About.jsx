function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
      Github Finder - a React app to search profiles and see profile details. This
        project is stored 
      <strong>
        <a href='https://github.com/loian4ik?tab=repositories'>  GITHUB</a>
      </strong>
      .
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-pink-400'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Development By:
        <a className='text-pink-400' href='https://www.linkedin.com/in/kseniya-hilo/'>
           Kseniya Hilo
        </a>
      </p>
    </>
  )
}

export default About