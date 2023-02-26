import Link from 'next/link';
import React, { useState } from 'react'
import Post from './Post';
import { useRouter } from 'next/router';

export default function Pagination({posts,pages}) {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1)
  const [maxPageSize, setMaxPageSize] = useState(5)
  let postsPerPage = posts.slice((pageIndex-1)*5, maxPageSize)
  // console.log(pages);
  // console.log(postsPerPage, maxPageSize);
  // console.log(router.query.id);
  return (
    <>
      <div className='post-container'>
        {postsPerPage.map((post, index) => {
          // console.log(post);
          return(
            <Post post={post} key={index} pages={pages}/>
            )
        })}
      </div>
      <div className='pagination-container'>
        {pages.map((page, index) => {
          // setPageIndex(index);
          return(
            // <div className='link-con'>
              <Link href={`${page}`} key={index} onClick={()=> {setPageIndex(page); setMaxPageSize(page*5)}}>
                {router.query.id == page ? 
                <li className='page-link'>{page}</li> : <li className='not-current-link'>{page}</li>
                
                }
              </Link>
            // </div>
          )
          
        })}
      </div>
    </>
  )
}
