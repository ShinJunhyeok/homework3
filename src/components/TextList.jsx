import TextItem from './TextItem';
import './TextList.scss';

const TextList = ({ data, onView }) => {
    return (
        <div className="text">
            {data.map((item) => (
                <TextItem key={item.id} item={item} onView={onView} />
            ))}
        </div>
    );
};

export default TextList;
