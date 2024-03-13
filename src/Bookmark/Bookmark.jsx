import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    // console.log(bookmark)
    const { title } = bookmark
    return (
        <div className="bg-slate-200 p-1 rounded-lg mb-3">
            <p>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;