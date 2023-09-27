import React from 'react'
import img2 from './asset/2.jpg'
import img3 from './asset/3.jpg'
import img4 from './asset/4.jpg'
import img5 from './asset/5.jpg'

const Gallery = () => {
    return (
        <div id='work' className='bg-white dark:text-white py-10 dark:bg-gray-900'>
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Works
            </h2>
            <div className="grid grid-cols-2 gap-2 ">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img2} alt />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img3} alt />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img4} alt />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img5} alt />
                </div>
            </div>
        </div>

    )
}

export default Gallery
