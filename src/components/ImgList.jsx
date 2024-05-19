import ImgItem from './ImgItem';
import './ItemList.scss';

const ImgList = ({ data, onView, cnt }) => {
    return (
        <ul className="list">
            {data.map((item) => (
                <ImgItem key={item.id} item={item} onView={onView} />
            ))}
        </ul>
    );
};

export default ImgList;
