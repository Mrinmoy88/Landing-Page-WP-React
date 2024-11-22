// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import BlogList from './BlogList';

const Body = () => {
    //let name = 'Mrinmoy';
    const [name , setName] = useState('Mrinmoy');
    const [age , setabc] = useState('12');
    const clickme = () => {
        setName('Maitra');
        setabc('25');
    }
    //const [name , setName] = useState('Mrinmoy');
    const clickme1 = () => {
        setName('Mrinmoy');
        setabc('12');

    }

    const [blogs, setBlogs] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ]);

    

    return ( 

        <div className="body">
            Body Content name is: <span id='name'>{name} and {age}</span> <br/>
            <button onClick={clickme}>Click me to change</button>
            <button onClick={clickme1}>Click me to change back</button>

            <BlogList blogs = {blogs} title='Al Blogs'/>
            <BlogList blogs = {blogs.filter((blog) => blog.id === 2)} title='Janes'/>
        </div>
     );
}
 
export default Body;