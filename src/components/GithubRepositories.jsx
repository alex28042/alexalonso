import React from 'react'
import GithubRepositorie from './GithubRepositorie'

const GithubRepositories = () => {
  const githubRepositoriesDetails = [

  ]
    
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className='flex flex-row'>
            <GithubRepositorie />
        </div>
    </div>
  )
}

export default GithubRepositories