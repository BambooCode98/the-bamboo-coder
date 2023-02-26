import React from 'react';
import Post from '@/components/Post';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../../utils';
import Head from 'next/head';


export default function BlogHome({posts}) {
  // console.log(posts);


  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <h1 className='blog-title'>Articles</h1>
      <div className='post-container'>
          {posts.map((post, index) => {
            // console.log(post);
            return(
              <Post post={post} key={index}/>
            )
          })}
        {/* <div className='post-con2'>

        </div> */}
      </div>
    
    </>
  )
}


export async function getStaticProps() {
  //get files from posts folder
  const files = fs.readdirSync(path.join('posts'));

  //get slug and front matter from posts

  const posts = files.map(file => {
    //create slug first
    const slug = file.replace('.md', '');

    //get front matter
    const frontMatter = fs.readFileSync(path.join('posts', file), 'utf-8')
    const {data: frontmatter} = matter(frontMatter);

    return {
      slug,
      frontmatter,
    }
  })

  return{
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}