import React, {useRef, useState} from "react";
import './WritePosts.css';
import RichTextEditor from "./Editor";


                                                 

const WritePosts = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");

    const contentRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submitting');
        const data = {title, content, date, category};
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data));
        fetch(`${process.env.REACT_APP_API_ENDPOINT}blogs/addpost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.ok) {
                alert("Post added successfully");
            } else {
                alert("Error adding post");
            }
        })
    }

    const handleText = values => {
        setContent(values);
        //do something with the values  
     }
   
    return (
        <div>
        <h1>Write A Post</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Title">Title
            <input value={title} onChange={e => setTitle(e.target.value)} name="Title" type="text" placeholder="Title" />
            </label>
            <label htmlFor="Date">Date
            <input value={date} onChange={e => setDate(e.target.value)} name="Date" type="date" />
            </label>
            <label htmlFor="Category">Category</label>
            <select onChange={e => setCategory(e.target.value)} name="Category">
                <option value="Lifestyle">Lifestyle</option>
                <option value="Tech">Tech</option>
                <option value="Music">Music</option>
                <option value="Food">Food</option>
                <option value="Recurse">Recurse</option>
            </select>
            <label htmlFor="Content">Content
            <div ref={contentRef} id="editor">
            <RichTextEditor handleText={handleText} />
            </div>
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }
export default WritePosts;