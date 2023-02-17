import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ReactMarkDown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nightOwl} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Comments from '@/components/Comments';
import Head from 'next/head';

export default function PostsPage({frontMatter,content,post}) {
  // console.log(frontMatter.title);
  return (
    <>
      {/* <Link href="/blog">
          <button className='backbtn'>
            Go Back
          </button>
      </Link> */}
      <Head>
        <title>
          {frontMatter.title} - The Bamboo Coder
        </title>
      </Head>

      <article className='post-block'>
        <h1 className='post-title'>{frontMatter.title}</h1>
        <p className='post-author'>By {frontMatter.author}</p>
        <img src={frontMatter.image} alt="post Image" width="300" height="250" className='post-thumbnail'/>
        <div className='post-date'>Posted on {frontMatter.date}</div>
        {/* <hr className='hr'/> */}
        {/* <div className='post-content markdown-body' dangerouslySetInnerHTML={{__html: marked.parse(content)}}>
        </div> */}
        <ReactMarkDown children={content} className="markdown-body"
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={nightOwl}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}   
        />
      </article>
      <Comments post={post} frontMatter={frontMatter} />
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(filename => ({
    params: {
      post: filename.replace('.md', '')
    }
  }))

  // console.log(paths);

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params: {post} }) {

  // console.log(post);
  const markdownContent = fs.readFileSync(path.join('posts', post + '.md'), 'utf-8')
  const {data: frontMatter, content} = matter(markdownContent);


  return{
    props: {
      frontMatter, 
      content, 
      post
    },
    revalidate: 10,
  }
}
