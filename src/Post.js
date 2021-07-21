import React from 'react'

function Post({post, deletePost}) {
    return (
        <div>
            <p>{post.title} : {post.author}</p>
            <button onClick={()=> deletePost(post.id)}>Delete</button>
        </div>
    )
}

export default  Post
