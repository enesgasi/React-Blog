import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body:'blablabla', author:'Enes', id:1},
        { title: 'Welcome party', body:'blablabla', author:'Lara', id:2},
        { title: 'How to make money', body:'blablabla', author:'Eda', id:3}
    ]);
        
    

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title ="All Blogs"></BlogList>
        </div>
     );
}
 
export default Home;