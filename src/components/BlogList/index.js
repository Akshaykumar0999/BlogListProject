// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogListDetails} = props
  return (
    <ul className="un-order-list">
      {blogListDetails.map(eachBlog => (
        <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
