import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmarks, handleMakeAsRead }) => {
    const { reading_time, author, cover_image, hash_tag , id} = blog;
    // console.log(blog)
    return (
        <div className='mb-10 space-y-4'>
            <img className='w-full max-h-96' src={cover_image} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-10 h-10 rounded-full' src={author.user_photo} alt="" />
                    <div className='ml-6'>
                        <p>{author.user_name}</p>
                        <p>{blog.post_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span>{reading_time} Reading Time</span>
                    <button onClick={() => handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-medium'>{blog.title}</h1>
            <p>
                {
                    hash_tag.map((tag, idx) => <span key={idx}><a href="">#{tag}</a></span>)
                }
            </p>
            <button onClick={() =>handleMakeAsRead(reading_time , id)} className='text-purple-600 font-medium text-xl underline'>Make As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMakeAsRead: PropTypes.func.isRequired
}

export default Blog;