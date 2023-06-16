import React, {useEffect, useState} from "react";

const BlogPages = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}blogs/getposts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    data.forEach((blog) => {
                        if (window.location.pathname === `/blogs/${(blog.title).replace(/ /g, "-")}`) {
                            setBlog(blog);
                        }
                    });
                });
            } else {
                alert("Error fetching posts");
            }
        })
    }, []);
    let date = new Date(blog.date).toLocaleDateString()
    return (
        <div className="container">
            <a href="/blogs">Return to all blogs</a>
            <h1>{blog.title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
    );
}

export default BlogPages;