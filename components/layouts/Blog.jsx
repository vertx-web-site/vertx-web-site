import Page from "./Page"
import BlogNavBar from "../blog/BlogNavBar"
import "./Blog.scss"

export default (props) => (
  <Page {...props}>
    <div className="blog">
      <BlogNavBar />
      {props.children}
    </div>
  </Page>
)
