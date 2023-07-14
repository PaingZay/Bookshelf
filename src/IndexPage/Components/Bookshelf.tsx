import { useEffect, useState } from "react";
import { Book } from "./Book";
import SongModel from "../../Models/SongModel";
import AuthorModel from "../../Models/AuthorModel";
import { Song } from "./Song";
import React from "react";


export const Bookshelf = () => {

  const [songs, setSongs] = useState<SongModel[]>([]);
  const [isLoadingSongs, setIsLodingSongs] = useState(true);
  const [httpError, setHttpError] = useState(null);

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

        } else {
          throw new Error("HTTP Response Failed");
        }



      } catch (error) {
        console.error('Something went wrong:', error);
      }
    };

    fetchContent();
  }, []);



  return (

    <div className="container mt-5">
      {/* <div className="row">
        <div className="col">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
              <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
            </div>
          </nav>
          <div className="tab-content mt-5" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}><h1>BOOKS</h1></div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}><h1>SONGS</h1></div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>...</div>
            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex={0}>...</div>
          </div>
        </div>
      </div> */}
      <div className="row mt-5" style={{ marginBottom: '100px' }}> {/* Need To Check Why Bootstrp margin is not working */}
        {
          // Limit Song
          songs.slice(2, 6).map(song => (
            
            <Song song={song} key={song.id} />
            
          ))

          // songs.map(song => (
          //   <Song song={song} key={song.id} />
          // ))
        }
        <div className="col-12 mt-5">
                    <div className="d-flex justify-content-left">
                      <button className="custom-btn btn-9">Read More</button>
                    </div>
        </div>
      </div>
    </div>
  );
}