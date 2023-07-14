import SongModel from "../../Models/SongModel"
import { Lyric } from "./Lyric";
import React from "react";

export const LyricCarousel: React.FC<{ songs: SongModel[] }> = (props) => {

    return (
        <div id="carouselExampleControls" className="carousel carousel-dark slide
            d-none d-lg-block" data-bs-interval='false'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        {
                            props.songs.slice(0, 6).map(song => (
                                <Lyric lyric={song.imgPath} name={song.name} key={song.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        {
                            props.songs.slice(6, 11).map(song => (
                                <Lyric lyric={song.imgPath} name={song.name} key={song.id} />
                            ))
                        }
                    </div>
                </div>
                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>

        // <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5
        //     d-none d-lg-block" data-bs-interval='false'>

        //         {/* Desktop */}
        //         <div className='carousel-inner'>
        //             <div className='carousel-item active'>
        //                 <div className='row d-flex justify-content-center align-items-center'>
        //                 {
        //                         props.songs.slice(0,5).map(song => (
        //                             <Lyric lyric = {song.imgPath} key ={song.id} />
        //                         ))                                
        //                     }
        //                 </div>
        //             </div>
        //             <div className='carousel-item'>
        //                 <div className='row d-flex justify-content-center align-items-center'>
        //                 {
        //                         props.songs.slice(5,10).map(song => (
        //                             <Lyric lyric = {song.imgPath} key ={song.id} />
        //                         ))                                
        //                     }
        //                 </div>
        //             </div>
        //             <button className='carousel-control-prev' type='button'
        //                 data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
        //                 <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        //                 <span className='visually-hidden'>Previous</span>
        //             </button>
        //             <button className='carousel-control-next' type='button'
        //                 data-bs-target='#carouselExampleControls' data-bs-slide='next'>
        //                 <span className='carousel-control-next-icon' aria-hidden='true'></span>
        //                 <span className='visually-hidden'>Next</span>
        //             </button>
        //         </div>
        //         </div>
    );
}