import React from 'react'
import img2 from './asset/2.jpg'
import img3 from './asset/3.jpg'
import img4 from './asset/4.jpg'
import img5 from './asset/5.jpg'
import img6 from './asset/6.jpg'
import img7 from './asset/7.jpg'
import img8 from './asset/8.jpg'
import img9 from './asset/9.jpg'
import img10 from './asset/10.jpg'
import img11 from './asset/11.jpg'
import img12 from './asset/12.jpg'
import img13 from './asset/13.jpg'
import Model from './Model'

const Gallery = () => {
    return (
        <div id='work' className='bg-white dark:text-white py-10 dark:bg-gray-900'>
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Works
            </h2>
            <div className="grid md:grid-cols-4 p-2 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 ">
                <div>
                    <Model image={img2} />
                </div>
                <div>
                    <Model image={img3} />
                </div>
                <div>
                    <Model image={img4} />
                </div>
                <div>
                    <Model image={img5} />
                </div>
                <div>
                    <Model image={img6} />
                </div>
                <div>
                    <Model image={img7} />
                </div>
                <div>
                    <Model image={img8} />
                </div>
                <div>
                    <Model image={img9} />
                </div>
                <div>
                    <Model image={img10} />
                </div>
                <div>
                    <Model image={img11} />
                </div>
                <div>
                    <Model image={img12} />
                </div>
                <div>
                    <Model image={img13} />
                </div>
            </div>
        </div>

    )
}

export default Gallery
