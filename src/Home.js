import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json()
        })

        .then((data) =>{
            setBlogs(data);
            setIsPending(false);
        })
        .catch(err => {
            console.log(err.message)
        })
    }, []);


    return ( 
        <div className="home">
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title ="All Blogs" ></BlogList>}
        </div>
    );
}

export default Home;