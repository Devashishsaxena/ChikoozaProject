import React, { useState, useEffect, } from 'react';
import { Galleria } from 'primereact/galleria';
import '../../assets/css/header.css';

const CarousalHome = () => {

    const [images, setImages] = useState([
        {"itemImageSrc": "https://www.chikooza.com/public/frontassets/images/1.jpg","thumbnailImageSrc": "images/galleria/galleria1s.jpg","alt": "Description for Image 1","title": "Title 1"},
        {"itemImageSrc": "https://www.chikooza.com/public/frontassets/images/2.jpg","thumbnailImageSrc": "images/galleria/galleria2s.jpg","alt": "Description for Image 2","title": "Title 2"},
        {"itemImageSrc": "https://www.chikooza.com/public/frontassets/images/3.jpg","thumbnailImageSrc": "images/galleria/galleria3s.jpg","alt": "Description for Image 3","title": "Title 3"},
        {"itemImageSrc": "https://www.chikooza.com/public/frontassets/images/4.jpg","thumbnailImageSrc": "images/galleria/galleria4s.jpg","alt": "Description for Image 4","title": "Title 4"},
    ]);


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }


    return (
        <div>
            <div className="galleria-demo">
                <div className="card shadow-none">
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={1} style={{ maxWidth: '640px' }}
                        showThumbnails={false} showIndicators item={itemTemplate}  />
                </div>
            </div>
        </div>
    );
}
export default CarousalHome;