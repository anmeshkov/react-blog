import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = (params) => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/posts/" + id
  );
  const navigate = useNavigate()

  const deletePost = () => {
    fetch('http://localhost:8000/posts/' + blog.id, {
      method: 'DELETE'
    }).then(
      navigate('/')
    )
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="author">Written by: {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <button onClick={deletePost} className="btn-delete">Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
