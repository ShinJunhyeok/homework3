import GalleryBig from './GalleryBig';
import ImgList from './ImgList';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import './GalleryView.scss';
import { useEffect, useState } from 'react';

const GalleryView = ({ data, cnt, onView }) => {
    const { id, title } = cnt;
    const [count, setCount] = useState(1);

    useEffect(() => {
        onView(count);
    }, [count]);

    const onCount = (x) => {
        setCount((prevCnt) => {
            const newCnt = prevCnt + x;
            if (newCnt < 1) return 5;
            if (newCnt > 5) return 1;
            return newCnt;
        });
    };

    return (
        <div>
            <h2>{title}</h2>
            <span>
                {id} / {data.length}
            </span>
            <GalleryBig cnt={cnt} />
            <ImgList data={data} onView={onView} cnt={cnt} />
            <p>
                <button onClick={() => onCount(-1)}>
                    <SlArrowLeft />
                </button>
                <button onClick={() => onCount(1)}>
                    <SlArrowRight />
                </button>
            </p>
        </div>
    );
};

export default GalleryView;
