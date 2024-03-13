import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, makeAsRead }) => {

    return (
        <div className="md:w-1/3 bg-slate-400 rounded-lg p-2">
            <h1>Reading time : {makeAsRead}</h1>
            <h1 className="text-2xl">Bookmarked Blog: {bookmarks.length}</h1>
            <div className='p-4'>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    makeAsRead: PropTypes.number.isRequired
}
export default Bookmarks;