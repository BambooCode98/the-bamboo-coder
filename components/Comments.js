import React from 'react'
import {DiscussionEmbed} from 'disqus-react'

export default function Comments({frontMatter,post}) {
  const disqusShortname = "https-thebamboocoder-com";
  const disqusConfig = {
    url: `https://thebamboocoder.com/blog/${post}`,
    identifier: "",
    title: `${frontMatter.title}`

  }
  return (
    <>
      <div className='disqus-container'>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </>
  )
}
