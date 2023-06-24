import { Book } from "./Book";

export const Bookshelf = () => {
    return(
        
        <div className="container mt-5">
        <div className="row">
            <div className="header">
                <h2>BOOKS</h2>
            </div>
        </div>
        <div className="row mt-5">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
        <div className="row mt-5">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    </div>
    );
}