import React, { useState } from 'react'

const Model = ({ image, HighQualityIMG }) => {
    const [open, setopen] = useState("hidden")
    function toggle(e) {
        e.stopPropagation();
        if (open === "hidden") {
            setopen("show")
        } else {
            setopen("hidden")

        }
    }

    return (
        <div>
            <img onClick={toggle} src={image} alt="image" className="h-auto hover:rotate-2 hover:scale-100 max-w-full rounded-lg" />
            <div className={`fixed flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm  p-4  inset-0  w-full h-full ${open}   p-4   h-screen`}>
                <div className="relative border-2 border-orange-400 bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={toggle} className="border-2 border-rose-500 absolute top-3 right-2.5 text-gray-600 bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-11 h-11 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close</span>
                    </button>
                    <div className="p-6">
                        <img src={HighQualityIMG} alt="image" className='max-h-[88vh]  max-w-full rounded-lg overflow-hidden ' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Model
