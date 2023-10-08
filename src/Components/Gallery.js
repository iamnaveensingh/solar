import React from 'react';
import Model from './Model';
import img2 from './asset/2.jpg';
import img3 from './asset/3.jpg';
import img4 from './asset/4.jpg';
import img5 from './asset/5.jpg';
import img6 from './asset/6.jpg';
import img7 from './asset/7.jpg';
import img8 from './asset/8.jpg';
import img9 from './asset/9.jpg';
import img10 from './asset/10.jpg';
import img11 from './asset/11.jpg';
import img12 from './asset/12.jpg';
import img13 from './asset/13.jpg';
import imgH2 from './asset/h2.jpg';
import imgH3 from './asset/h3.jpg';
import imgH4 from './asset/h4.jpg';
import imgH5 from './asset/h5.jpg';
import imgH6 from './asset/h6.jpg';
import imgH7 from './asset/h7.jpg';
import imgH8 from './asset/h8.jpg';
import imgH9 from './asset/h9.jpg';
import imgH10 from './asset/h10.jpg';
import imgH11 from './asset/h11.jpg';
import imgH12 from './asset/h12.jpg';
import imgH13 from './asset/h13.jpg';


const Gallery = () => {
    return (
        <div id='work' className='bg-white dark:text-white py-10 dark:bg-gray-900'>
            <h2 className="pb-8 mb-8 border-b border-gray-200  dark:border-gray-700 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Works
            </h2>
            <div className="grid md:grid-cols-4 p-2 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 ">
                <div>
                    <Model image={img2} HighQualityIMG={imgH2} />
                </div>
                <div>
                    <Model image={img3} HighQualityIMG={imgH3} />
                </div>
                <div>
                    <Model image={img4} HighQualityIMG={imgH4} />
                </div>
                <div>
                    <Model image={img5} HighQualityIMG={imgH5} />
                </div>
                <div>
                    <Model image={img6} HighQualityIMG={imgH6} />
                </div>
                <div>
                    <Model image={img7} HighQualityIMG={imgH7} />
                </div>
                <div>
                    <Model image={img8} HighQualityIMG={imgH8} />
                </div>
                <div>
                    <Model image={img9} HighQualityIMG={imgH9} />
                </div>
                <div>
                    <Model image={img10} HighQualityIMG={imgH10} />
                </div>
                <div>
                    <Model image={img11} HighQualityIMG={imgH11} />
                </div>
                <div>
                    <Model image={img12} HighQualityIMG={imgH12} />
                </div>
                <div>
                    <Model image={img13} HighQualityIMG={imgH13} />
                </div>
            </div>
        </div>

    )
}

export default Gallery
