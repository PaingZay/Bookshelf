import React, { useState } from "react";


export const Lyric: React.FC<{ lyric: any, name:string|undefined}> = (props) => {
    const [imageSrc, setImageSrc] = useState(`http://163.44.196.216:8080/api/${props.lyric}`);
    const fallbackImage = "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png";
    // const [imageStatus, setImageStatus] = useState('loading');

    const handleImageLoad = () => {
        // setImageStatus('success');
        // console.log("Success");
    };

    const handleImageError = () => {
        // setImageStatus('error');
        setImageSrc(fallbackImage);
        // console.log("Error");
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-2">

            <div className="card book-container" style={{ width: '100px', height: '180px' }}>
                {props.lyric ?
                    <img src={imageSrc} className="card-img-top" alt="" onLoad={handleImageLoad} onError={handleImageError} />
                    :
                    <img src={fallbackImage} alt="Muda" />
                }
                <div className="text-overlay small">{props.name}</div>
            </div>
        </div>
    );
}