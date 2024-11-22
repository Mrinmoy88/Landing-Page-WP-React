const BlogList = ( {blogs,title} ) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        
        <div className="blogs">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className='blogs-review' key={blog.id}>
                    <h4>{blog.id}. {blog.name}</h4>
                </div>

            ))}
        </div>
     );
}
 
export default BlogList;