import React, { useState, useEffect } from 'react'
import { API_URL } from '../constants'
// API_URL comes from .evn.dev file

const PostsList = () => {

  // Fetch posts from the API
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(API_URL)
        if (res.ok) {
          const json = await res.json();
          setPosts(json)
        }
        else {
          throw res;
        }
      }
      catch (e) {
        setError("An error occured!!")
        console.log("An error occured",e)
      }
      finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className='post-container'>
          <h2>{ post.title}</h2>
          <p>{post.body}</p>
        </div>
        )
      })}
    </div>
  )
}

export default PostsList
