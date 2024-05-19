import './ImgItem.scss';

const ImgItem = ({ item, onView, cnt }) => {
    const { id, title, imgurl, isShow } = item;
    return (
        <>
            <li className={isShow ? 'on' : ''} onClick={() => onView(id)}>
                <img src={imgurl} alt={title} />
            </li>
        </>
    );
};

export default ImgItem;
