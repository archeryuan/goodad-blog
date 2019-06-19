import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PropTypes from 'prop-types';

// class BlogPostTemplate extends Component {
//   render() {
//     if(!this.props.data.contentfulBlogPost){
//       return (
//         <div>
//           "No content!"
//         </div>
//       )
//     }else{
//       const {
//         title,
//         body
//       } = this.props.data.contentfulBlogPost
//       if(body){
//         return (
//           <Layout>
//           <div>
//             <h1>{title}</h1>
//             <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
//           </div>
//           </Layout>
//         )
//       }else{
//         return (
//           <Layout>
//           <div>
//             <h1>{title}</h1>
//           </div>
//           </Layout>
//         )
//       }
//
//     }
//
//   }
// }
//
// BlogPostTemplate.propTypes = {
//   data: PropTypes.object.isRequired
// }

// export default BlogPostTemplate

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }, title: {ne: null}) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(
      slug: {eq: $slug},
      title: {ne: null}
    ) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
