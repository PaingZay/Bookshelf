import AuthorModel from "./AuthorModel";

class SongModel {
    id: number;
    name?: string;
    musicLink?: string;
    imgPath?: string;
    authors: AuthorModel[];
    saved?: boolean;

    constructor(id:number, name: string, musicLink: string, imgPath: string, authors: AuthorModel[], saved: boolean) {
        this.id = id;
        this.name = name;
        this.musicLink = musicLink;
        this.imgPath = imgPath;
        this.authors = authors;
        this.saved = saved;
    }
}

export default SongModel;