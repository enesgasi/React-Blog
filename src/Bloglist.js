const BlogList = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p> { blog.body }</p>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;