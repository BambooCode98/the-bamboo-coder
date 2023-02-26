import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import matter from 'gray-matter';
import Image from 'next/image'
import { sortByDate } from '../utils';
import Post from '@/components/Post';
import HomePage from '@/components/HomePage';



export default function Home({posts}) {
  // console.log(posts);
  // posts.forEach(post => {
  //   for(let i=0; i<post.frontmatter.tags.length;i++) {
  //     console.log(post.frontmatter.tags[i],'b');

  //   }
  // })

  return (
    <>
      <Head>
        <title>The Bamboo Coder</title>
        <meta name="description" content="Learn about generative art and AI with javascript and Python." />
        <meta name="keywords" content="Generative Art, AI, Deep Learning, Machine Learning, Learn to Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="" /> */}
      </Head>
      {/* <img src="" alt="img placeholder"/> */}
      <HomePage  posts={posts} />
      
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
