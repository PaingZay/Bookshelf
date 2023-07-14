import React from "react";
import { Bookshelf } from "./Components/Bookshelf";
import { Carousel } from "./Components/Carousel";


export const IndexPage = () => {

    return(
        <div>
            <Carousel/>
            <Bookshelf/>
        </div>
    );
}