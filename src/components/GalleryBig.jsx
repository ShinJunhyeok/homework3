import './GalleryBig.scss';
const GalleryBig = ({ cnt }) => {
    const { id, title, imgurl } = cnt;
    return (
        <div className="bigImg">
            <img src={imgurl} alt={title} />
        </div>
    );
};

export default GalleryBig;
