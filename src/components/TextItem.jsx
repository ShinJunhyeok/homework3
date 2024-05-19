import './TextItem.scss';
import { SlArrowLeft } from 'react-icons/sl';

const TextItem = ({ item, onView }) => {
    const { id, title, desc, isShow } = item;
    return (
        <>
            <dt className={isShow ? 'on' : ''} onClick={() => onView(id)}>
                {title}
                <em>
                    <SlArrowLeft />
                </em>
            </dt>
            <dd className={isShow ? 'on' : ''}>{desc}</dd>
        </>
    );
};

export default TextItem;
