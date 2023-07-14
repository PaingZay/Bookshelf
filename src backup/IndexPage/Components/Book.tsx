
// popovers initialization - on hover

export const Book = () => {
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            {/* <a className="book-container">
                    <img src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg" alt="kiminonawa" className="book-image layer layer2" />
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
            </a> */}

            <div className="card book-container" style={{width:'280px',height:'480px'}}>
                <div className="book-image">
                <img src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Your Name</p>
                </div>
                    <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                </div>
            </div>
        </div>
    );
}