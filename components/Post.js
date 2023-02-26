import Link from 'next/link'
import React from 'react'

export default function Post({post,pages}) {
  return (
    <div>
      
        <div className="post-card">
          <Link href={`/blog/post/${post.slug}`} className='post-link' >
            <img src={post.frontmatter.image} alt={post.slug}className='card-thumb'/>
            <div className='card-info'>
              <h2 className='card-title'>{post.frontmatter.title}</h2>
              <hr/>
              <p className='card-date'>Posted on {post.frontmatter.date}</p>
              <p className='excerpt'>{post.frontmatter.excerpt}</p>
                {/* <p>Author: {post.frontmatter.author}</p> */}
              {/* <div className='under-title'>
              </div> */}
              {/* <span>Read More...</span> */}
            </div>
          </Link>

        </div>
     
      
    </div>
  )
}
