import React, { useState, useEffect } from "react"
import "./DataFetcher.css"

const DataFetcher = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Erro ao carregar os posts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const maxPosts = 10

  return (
    <div className="posts-container">
      <h1>Lista de Posts</h1>
      <button onClick={fetchPosts} disabled={loading} className="reload-button">
        {loading ? "Carregando..." : "Recarregar Posts"}
      </button>
      {loading && <p className="loading-text">Carregando posts...</p>}
      <ul className="posts-list">
        {!loading &&
          posts.slice(0, maxPosts).map(post => (
            <li key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DataFetcher
