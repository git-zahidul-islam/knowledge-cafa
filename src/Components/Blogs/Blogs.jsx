import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const BLogs = ({ handleBookmarks, handleMakeAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('./data.json')
            const data = await res.json()
            // console.log(data)
            setBlogs(data)
        }
        fetchData()
    }, [])

    return (
        <div className="md:w-2/3 bg-slate-400 p-5 rounded-lg">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map((blog, index) => <Blog
                    key={index} blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMakeAsRead={handleMakeAsRead}
                ></Blog>)
            }
        </div>
    );
};

BLogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleMakeAsRead: PropTypes.func.isRequired
}
export default BLogs;