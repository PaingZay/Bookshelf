import { useState } from "react";
import SongModel from "../../Models/SongModel"
import { Link } from "react-router-dom";
import React from "react";

export const Song: React.FC<{ song: SongModel }> = (props) => {
    const [imageSrc, setImageSrc] = useState(`http://163.44.196.216:8080/api/${props.song.imgPath}`);
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
        <div className="col-sm-6 col-md-4 col-lg-3 mt-5">

            <div className="card book-container" style={{ width: '280px', height: '480px' }}>
                        <Link href="" to={`/lyrics/${props.song.id}`}>
                        {props.song.imgPath ?
                            <img src={imageSrc} className="card-img-top" alt="" onLoad={handleImageLoad} onError={handleImageError} />
                            :
                            <img src={fallbackImage} alt="Muda" />
                        }
                        <div className="text-overlay">{props.song.name}</div>
                        {/* <button className="custom-btn btn-2"><span>{props.song.name}</span></button> */}
                        </Link>
                    </div>
                </div>
            
    );
}