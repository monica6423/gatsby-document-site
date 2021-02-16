import React, {useEffect, useState} from 'react';
import tiny from './tiny.jpg';


const useProgressiveImg = (highQuality) => {
    const [src, setSrc] = useState(tiny);

    useEffect(() => {
        const img = new Image();
        img.src = highQuality;
        img.onload = () => {
            setSrc(highQuality)
        };
    }, [highQuality]);

    let blur
    src === tiny? blur = true: blur = false;

    return [src, blur];
}


export default useProgressiveImg;
