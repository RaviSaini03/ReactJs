import React from 'react'
import authService from '../appwrite/auth'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-400 p-4 rounded-2xl'>
        <div className='flex w-full justify-center mb-4'>
          <img src={service.getFilePreview(featuredImage)} alt="" />
        </div>
        <h2 className='text-xl font-bold'>
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard