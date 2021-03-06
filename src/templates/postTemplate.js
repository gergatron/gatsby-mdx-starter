import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <section>
      <div>
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </section>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`