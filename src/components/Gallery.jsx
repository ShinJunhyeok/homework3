import GalleryView from './GalleryView';
import TextList from './TextList';
import './Gallery.scss';
import galleryData from '../assets/api/galleryData';
import { useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState(galleryData);
    const [cnt, setCnt] = useState(data[0]);
    const onView = (idx) => {
        setCnt(data.find((item) => item.id === idx));
        setData(
            data.map((item) =>
                item.id === idx ? { ...item, isShow: true } : { ...item, isShow: false }
            )
        );
    };
    return (
        <>
            <div className="wrap">
                <GalleryView cnt={cnt} data={data} onView={onView} />
                <TextList data={data} onView={onView} />
            </div>
        </>
    );
};

export default Gallery;
