import React, { useEffect, useState } from 'react';
import { LyricCarousel } from './Component/LyricCarousel';
import SongModel from '../Models/SongModel';
import AuthorModel from '../Models/AuthorModel';
import { SpinnerLoading } from '../Utils/SpinnerLoading';


// export const LyricPage: React.FC<{ songs: SongModel[], songId: number }> = (props) => {
export const LyricPage = () => {
    // Song
    const [songs, setSongs] = useState<SongModel[]>([]);
    const [currentSong, setCurrentSong] = useState<SongModel>();;
    const [isLoadingSongs, setIsLoadingSongs] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const songId = parseInt((window.location.pathname).split('/')[2]);

    //IMG
    const [imageSrc, setImageSrc] = useState("");
    const fallbackImage = "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png";
    // const [imageStatus, setImageStatus] = useState('loading');

    const handleImageLoad = () => {
        console.log("Success");
    };

    const handleImageError = () => {
        setImageSrc(fallbackImage);
    };

    useEffect(() => {
        const foundSong = songs.find((song) => song.id === songId);
        if (foundSong) {
            console.log("Found Song");
            setCurrentSong(foundSong);//Change Current Song
            setImageSrc(`http://163.44.196.216:8080/api/${currentSong?.authors[0].profile}`);//Set Current Image After Changing Current Song
        }

    }, [songs, songId, currentSong]);

    useEffect(() => {
        const fetchContent = async () => {
            const url = 'http://163.44.196.216:8080/api/user/lyric/home-navigate';
            const formData = new FormData();
            formData.append('name', 'lyric');

            const requestOptions = {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'ApiKey f90f76d2-f70d-11ed-b67e-0242ac120002',
                },
            };

            try {
                const response = await fetch(url, requestOptions);

                if (response.ok) {
                    const responseJson = await response.json();
                    console.log("SONG JSON", responseJson);
                    const responseData = responseJson.data.content;
                    console.log("SONG DATA", responseData);
                    console.log("SONG DATA LIST", responseData[0].authors);
                    console.log("SONG DATA OBJ", responseData[0].authors[0]);
                    const loadedSongs: SongModel[] = [];

                    for (const key in responseData) {

                        const authors: AuthorModel[] = responseData[key].authors.map((author: any) => {
                            return new AuthorModel(
                                author.id,
                                author.name,
                                author.authorType,
                                author.profile
                            );
                        });

                        const song: SongModel = new SongModel(
                            responseData[key].id,
                            responseData[key].name,
                            responseData[key].musicLink,
                            responseData[key].imgPath,
                            authors,
                            responseData[key].saved
                        );
                        loadedSongs.push(song);
                    }

                    setSongs(loadedSongs);
                    setIsLoadingSongs(false);
                } else {
                    throw new Error("HTTP Response Failed");
                }

            } catch (error) {
                console.error('Something went wrong:', error);
                setIsLoadingSongs(false);
                setHttpError(error.message);
            }
        };

        fetchContent();
    }, []);

    if (isLoadingSongs) {
        return (
            <div className="container m-5">
                <SpinnerLoading />
            </div>
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className='section lyricbg'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-6  mt-5 mb-5'>
                        <div className="lyric-container">
                            <img src={`http://163.44.196.216:8080/api/${currentSong?.imgPath}`} alt='' />
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <LyricCarousel songs={songs} />
                            </div>
                            <div className='col-lg-12'>
                                <h2>{currentSong?.name}</h2>
                                <h3>
                                    {
                                        currentSong?.authors.map(author => (
                                            author.name
                                        ))
                                    }
                                </h3>
                            </div>
                            <div className='col-lg-12'>
                                <div className="card book-container" style={{ width: '280px', height: '480px' }}>
                                    {
                                        currentSong?.authors[0].profile! ?
                                            <img src={imageSrc} className="card-img-top" alt="" onLoad={handleImageLoad} onError={handleImageError} />
                                            :
                                            <img src={"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*hFwwQAW45673VGKrMPE2qQ.png"} alt="Muda" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col  mt-5 mb-5'>
                    <h1>HELLO</h1>
                </div>
                <div className='col-lg-6 mt-5'>
                    <h1>CLASS</h1>
                </div>
            </div>
        </div>
    );
}