import React from "react"
import {graphql} from "gatsby"

const Home = ({data}) =>  {
  return (
   <div>Hello world!</div>
  )
}


export default Home


 // Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
 export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;