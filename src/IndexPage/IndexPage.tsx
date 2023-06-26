
import { Bookshelf } from "./Components/Bookshelf";
import { Carousel } from "./Components/Carousel";


export const IndexPage = () => {

    return(
        <div className="mb-5">
            <Carousel/>
            <Bookshelf/>
        </div>
    );
}